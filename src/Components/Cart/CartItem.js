import { useState } from 'react';
import PropTypes from 'prop-types';
import makeid from '../Shared/methods/makeid';
import './CartItem.css';

const CartItem = ({
  item, setParentQuantity, priceForItem, shippingPrice, totalPrice,
}) => {
  const [numberOfItems, setNumberOfItems] = useState(1);

  return (
    <div className="white-background rounded m-2 p-2">
      <div>
        Order No :
        {item.orderNo}
      </div>
      <div className="d-flex justify-content-between">
        <div className="orange mt-2">
          <div>{item.supplierName}</div>
          <div>{item.name}</div>
          <div>
            {item.variantOptions.map((vo) => (
              <div className="d-flex" key={makeid(10)}>
                <div>
                  {vo.name}
                  :
                  {' '}
                </div>
                <div>{vo.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div>
              No of Items:
            </div>
            <input className="form-control cart-number-of-items" type="number" value={numberOfItems} onChange={(e) => { setNumberOfItems(e.target.value); setParentQuantity(e.target.value); }} />
          </div>
          <div>
            Price:
            {`${priceForItem} ${item.currency}`}
          </div>
          <div>
            Shipping Price:
            {`${shippingPrice} ${item.currency}`}
          </div>
          <div>
            Total:
            {`${totalPrice} ${item.currency}`}
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    orderNo: PropTypes.number.isRequired,
    supplierName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    variantOptions: PropTypes.instanceOf(Array).isRequired,
    shippingWeight: PropTypes.number.isRequired,
  }).isRequired,
  setParentQuantity: PropTypes.func.isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
};

export default CartItem;
