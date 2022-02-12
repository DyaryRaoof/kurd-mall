import PropTypes from 'prop-types';
import makeid from './methods/makeid';

const CartTop = ({
  item, priceForItem, shippingPrice, totalPrice,
}) => (
  <div>
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
            {item.quantity}
          </div>
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

CartTop.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    orderNo: PropTypes.number.isRequired,
    supplierName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    variantOptions: PropTypes.instanceOf(Array).isRequired,
    shippingWeight: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    pickedUp: PropTypes.bool.isRequired,
  }).isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
};

export default CartTop;
