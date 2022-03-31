import { t } from 'i18next';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CartTop from '../Shared/CartTop';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const Item = ({
  item, priceForItem, shippingPrice, totalPrice, isBuyer,
}) => {
  const navigate = useNavigate();

  return (
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
                buttonText={t('openItem')}
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
            buttonText={t('openStore')}
            onPressed={() => { navigate(`/store-detail/${item.store_id}`); }}
            width="200px"
            padding="5px"
            iconName="store"
          />
        </div>
        <div className="col-md-4 d-flex justify-content-center my-2">
          <RoundOrangeIconButton
            buttonText={isBuyer ? t('messageSupplier') : t('callDriver')}
            onPressed={() => window.open(`tel:${isBuyer ? item.store_phone : item.driver_phone}`)}
            width="200px"
            padding="5px"
            iconName="call"
          />
        </div>

      </div>
      <div className="d-flex flex-column align-items-end justify-content-center">
        <p>
          <span>
            {' '}
            {t('status')}
            :
            {' '}
          </span>
          <span className="orange">{item.is_picked_up ? t('pickedUp') : t('waiting')}</span>
        </p>
      </div>
    </div>
  );
};
Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
  isBuyer: PropTypes.bool.isRequired,
};

export default Item;
