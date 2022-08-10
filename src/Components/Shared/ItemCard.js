import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stars from './Stars';
import './ItemCard.css';
import MaterialIcon from './MateriaIcon';

const ItemCard = ({ item, isStore, isSearchItem }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    name, price, quantity, image_urls: imageURLS, currency, user_id: userId,
  } = item;

  const handleClick = () => {
    if (isStore) {
      navigate(`/store-detail/${item.id}`, {
        state: {
          store: item,
        },
      });
    } else {
      navigate(`/item-detail/${item.id}`, {
        state: {
          item,
        },
      });
    }
  };

  const checkIfUserHasStore = () => {
    if (!user) {
      return false;
    }

    if (isStore && user.id === userId) {
      return true;
    }
    return false;
  };

  const checkIfUserHasItem = () => {
    if (!isStore) {
      if (user) {
        if (userId === user.id) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <div className="mt-2 mx-1">
      <div className={`${!isSearchItem ? 'card item-card' : ''} p-2`}>
        <button onClick={() => handleClick()} type="button" className="icon-button">
          <div className="row">
            <div className={`${isSearchItem ? 'col-md-3' : ''}`}>
              <img src={imageURLS ? imageURLS[0] : ''} className="card-img-top item-image" alt="Item" />
            </div>
            <div className={`${isSearchItem ? 'col-md-9' : ''}`}>
              <div className={`card-body ${isSearchItem ? 'col-md-9 d-flex flex-column align-items-start' : ''}`}>
                <h5 className="card-title">{name}</h5>
                {!isStore && (
                  <div>
                    <Stars item={item} />
                    <div>
                      {price}
                      {' '}
                      {currency === 'IQD' ? t('iqd') : t('usd')}
                    </div>
                    <div className="red">
                      {' '}
                      {quantity}
                      {' '}
                      {t('leftInStock')}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </button>

        {(checkIfUserHasItem() || checkIfUserHasStore()) && (
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="icon-button"
              onClick={() => {
                if (isStore) {
                  navigate('/create-store', {
                    state: {
                      store: item,
                      isUpdate: true,
                    },
                  });
                } else {
                  navigate('/create-item', {
                    state: {
                      item,
                      isUpdate: true,
                    },
                  });
                }
              }}
            >
              <MaterialIcon text="create" orange />
            </button>
          </div>
        )}
      </div>
      {isSearchItem ? <hr /> : null}
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  isStore: PropTypes.bool,
  isSearchItem: PropTypes.bool,
};

ItemCard.defaultProps = {
  isSearchItem: false,
  isStore: false,
};

export default ItemCard;
