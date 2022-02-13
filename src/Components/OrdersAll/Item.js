import PropTypes from 'prop-types';
import CartTop from '../Shared/CartTop';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const Item = ({
  item, priceForItem, shippingPrice, totalPrice, onRemove,
}) => (
  <div className="white-background rounded m-2 p-2">
    <CartTop
      item={item}
      priceForItem={priceForItem}
      shippingPrice={shippingPrice}
      totalPrice={totalPrice}
    />
    <div className="row">
      <div className="col-md-4  d-flex justify-content-center">
        <RoundOrangeIconButton
          buttonText="Claim Order"
          onPressed={() => { onRemove(item.id); }}
          width="200px"
          padding="5px"
          iconName="local_shipping"
        />
      </div>

      <div className="col-md-4 d-flex justify-content-center">
        <RoundOrangeIconButton
          buttonText="Open Store"
          onPressed={() => { }}
          width="200px"
          padding="5px"
          iconName="store"
        />
      </div>
      <div className="col-md-4 d-flex justify-content-center">
        <RoundOrangeIconButton
          buttonText="Message Supplier"
          onPressed={() => { }}
          width="200px"
          padding="5px"
          iconName="chat_bubble_outline"
        />
      </div>
    </div>
  </div>
);

Item.propTypes = {
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
  }).isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Item;
