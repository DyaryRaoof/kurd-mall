import PropTypes from 'prop-types';
import Item from './Item';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import cartItems from '../mock-data/cartItems';
import Pagination from '../Shared/Pagination';

const OwnerOrders = ({ isBuyer }) => (
  <main className="container">
    <h3>Current Orders</h3>
    <div className="gray-background rounded p-1 my-2">
      {cartItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          priceForItem={item.variantOptions.length > 1
            ? item.quantity * item.price : item.quantity * item.variantOptions[0].price}
          shippingPrice={getShippingPrice(item.quantity * item.shippingWeight, item.currency)}
          totalPrice={item.totalPrice}
          isBuyer={isBuyer}
        />
      ))}
    </div>
    <Pagination onPageChange={() => { }} currentPage={0} totalPages={10} />
  </main>
);

OwnerOrders.propTypes = {
  isBuyer: PropTypes.bool,
};

OwnerOrders.defaultProps = {
  isBuyer: false,
};

export default OwnerOrders;
