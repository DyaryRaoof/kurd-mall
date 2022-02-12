import PropTypes from 'prop-types';
import CartTop from '../Shared/CartTop';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const Item = ({
  item, priceForItem, shippingPrice, totalPrice, isBuyer,
}) => (
  <div className="white-background rounded m-2 p-2">
    <CartTop
      item={item}
      priceForItem={priceForItem}
      shippingPrice={shippingPrice}
      totalPrice={totalPrice}
    />
    <div className="row mt-3">

      <div className="col-md-4 d-flex justify-content-center my-2 ">
        {
          isBuyer ? (
            <RoundOrangeIconButton
              buttonText="Open Item"
              onPressed={() => { }}
              width="200px"
              padding="5px"
              iconName="local_offer"
            />
          )
            : null
        }
      </div>
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
          buttonText={isBuyer ? 'Message Store' : 'Message Driver'}
          onPressed={() => { }}
          width="200px"
          padding="5px"
          iconName="chat_bubble_outline"
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
  isBuyer: PropTypes.bool.isRequired,
};

export default Item;
