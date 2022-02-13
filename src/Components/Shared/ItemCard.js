import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stars from './Stars';
import './ItemCard.css';

const ItemCard = ({
  name, stars, price, leftInStock, image, isSearchItem, isStore, id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isStore) {
      navigate('/store-detail', {
        state: {
          name, stars, price, leftInStock, id,
        },
      });
    } else {
      navigate('/item-detail', {
        state: {
          name, stars, price, leftInStock, id,
        },
      });
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className="icon-button"
    >
      <div className="container">
        <div className={`${!isSearchItem ? 'card item-card' : ''} p-2`}>
          <div className="row">
            <div className={`${isSearchItem ? 'col-md-3' : ''}`}>
              <img src={image} className="card-img-top item-image" alt="Item" />
            </div>
            <div className={`${'col-md-9'}`}>
              <div className={`card-body ${isSearchItem ? 'col-md-9 d-flex flex-column align-items-start' : ''}`}>
                <h5 className="card-title">{name}</h5>
                <Stars number={stars.count} users={stars.users} />
                {!isStore && (
                  <div>
                    <div>
                      {price.value}
                      {' '}
                      {price.currency}
                    </div>
                    <div className="red">
                      {' '}
                      {leftInStock}
                      {' '}
                      are left in stock
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      {isSearchItem ? <hr /> : null}
    </button>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  leftInStock: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isSearchItem: PropTypes.bool,
  isStore: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

ItemCard.defaultProps = {
  isSearchItem: false,
  isStore: false,
};

export default ItemCard;
