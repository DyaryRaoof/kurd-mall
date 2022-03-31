import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartTop from '../Shared/CartTop';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const Item = ({
  item, priceForItem, shippingPrice, totalPrice, onRemove,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
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
            buttonText={t('claimOrder')}
            onPressed={() => { onRemove(item.id); }}
            width="200px"
            padding="5px"
            iconName="local_shipping"
          />
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <RoundOrangeIconButton
            buttonText={t('openStore')}
            onPressed={() => { navigate(`/store-detail/${item.store_id}`); }}
            width="200px"
            padding="5px"
            iconName="store"
          />
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <RoundOrangeIconButton
            buttonText={t('callSupplier')}
            onPressed={() => window.open(`tel:${item.store_phone}`)}
            width="200px"
            padding="5px"
            iconName="phone"
          />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Item;
