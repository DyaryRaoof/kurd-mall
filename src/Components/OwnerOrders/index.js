import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import getMyBoughtOrders from '../../api/getMyBoughtOrders';

const OwnerOrders = ({ isBuyer }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.getMyBoughtOrdersReducer.orders) || [];

  useEffect(() => {
    dispatch(getMyBoughtOrders);
  }, []);

  const priceForItem = (item) => {
    if (item.variantOptions) {
      if (item.variantOptions.length > 1) {
        return item.quantity * item.variantOptions[0].price;
      }
      return item.quantity * item.price;
    }
    return item.quantity * item.price;
  };

  return (
    <main className="container">
      <h3>Current Orders</h3>
      <div className="gray-background rounded p-1 my-2">
        {cartItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            priceForItem={priceForItem(item)}
            shippingPrice={getShippingPrice(item.quantity * item.shippingWeight, item.currency)}
            totalPrice={item.total_price}
            isBuyer={isBuyer}
          />
        ))}
      </div>
    </main>
  );
};

OwnerOrders.propTypes = {
  isBuyer: PropTypes.bool,
};

OwnerOrders.defaultProps = {
  isBuyer: false,
};

export default OwnerOrders;
