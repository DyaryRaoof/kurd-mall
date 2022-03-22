import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stars from './Stars';
import './ItemCard.css';
import MaterialIcon from './MateriaIcon';

const ItemCard = ({
  item, isStore, isSearchItem,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    name, stars, price, quantity, image_urls: imageURLS, id, currency, reviewers,
  } = item;

  const handleClick = () => {
    if (isStore) {
      navigate('/store-detail', {
        state: {
          store: item,
        },
      });
    } else {
      navigate('/item-detail', {
        state: {
          item,
        },
      });
    }
  };

  const checkIfUserHasStore = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (isStore && user.storeId === id) {
      return true;
    }
    return false;
  };

  return (

    <div className="mt-2 mx-1">
      <div className={`${!isSearchItem ? 'card item-card' : ''} p-2`}>
        <button
          onClick={() => handleClick()}
          type="button"
          className="icon-button"
        >
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

        {
          (!isStore || checkIfUserHasStore()) && (
            <div className="d-flex justify-content-end">

              <button
                type="button"
                className="icon-button"
                onClick={() => {
                  if (isStore) {
                    navigate('/create-store', {
                      state: {
                        name, stars, reviewers, id,
                      },
                    });
                  } else {
                    navigate('/create-item', {
                      state: {
                        name, stars, price, reviewers, quantity, id,
                      },
                    });
                  }
                }}
              >
                <MaterialIcon text="create" orange />
              </button>
            </div>
          )
        }
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
