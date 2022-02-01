import PropTypes from 'prop-types';
import Stars from './Stars';
import './ItemCard.css';

const ItemCard = ({
  name, stars, price, leftInStock, image,
}) => (

  <div className="container">
    <div className="card item-card p-2">
      <img src={image} className="card-img-top item-image" alt="Item" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Stars number={stars.count} users={stars.users} />
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
    </div>
  </div>
);

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  leftInStock: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ItemCard;
