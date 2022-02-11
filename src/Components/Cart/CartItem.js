import PropTypes from 'prop-types';

const CartItem = ({ item }) => <div className='white-background rounded'>{item.name}</div>;

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    supplierName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    optionName: PropTypes.string.isRequired,
    optionPrice: PropTypes.number.isRequired,
    optionValue: PropTypes.string.isRequired,
    shippingWeight: PropTypes.number.isRequired,
  }).isRequired,

};

export default CartItem;
