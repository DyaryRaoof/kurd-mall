import PropTypes from 'prop-types';
import CartTop from '../Shared/CartTop';
import MaterialIcon from '../Shared/MateriaIcon';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const Item = ({
  item, priceForItem, shippingPrice, totalPrice, onPickUpChanged,
}) => (
  <div className="white-background rounded m-2 p-2">
    <div className="d-flex justify-content-end">
      <MaterialIcon text="place" isLarge orange />
    </div>

    <CartTop
      item={item}
      priceForItem={priceForItem}
      shippingPrice={shippingPrice}
      totalPrice={totalPrice}
    />
    <div className="row mt-3">

      <div className="col-md-4 d-flex justify-content-center my-2 ">
        <RoundOrangeIconButton
          buttonText="Open Store"
          onPressed={() => { }}
          width="200px"
          padding="5px"
          iconName="store"
        />
      </div>
      <div className="col-md-4 d-flex justify-content-center my-2">
        <RoundOrangeIconButton
          buttonText="Message Supplier"
          onPressed={() => { }}
          width="200px"
          padding="5px"
          iconName="chat_bubble_outline"
        />
      </div>

      <div className="col-md-4 d-flex justify-content-center my-2">
        <RoundOrangeIconButton
          buttonText={item.pickedUp ? 'Deliver' : 'Pick Up'}
          onPressed={() => { onPickUpChanged(item.id); }}
          width="200px"
          padding="5px"
          iconName="local_shipping"
        />
      </div>
    </div>
    <div className="d-flex flex-column align-items-end justify-content-center">
      <p>
        <span> Status: </span>
        <span className="orange">{item.pickedUp ? 'Picked Up' : 'Waiting'}</span>
      </p>
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
    pickedUp: PropTypes.bool.isRequired,
  }).isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
  onPickUpChanged: PropTypes.func.isRequired,
};

export default Item;