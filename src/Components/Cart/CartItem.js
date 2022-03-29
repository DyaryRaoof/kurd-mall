import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import makeid from '../Shared/methods/makeid';
import './CartItem.css';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const CartItem = ({
  item, setParentQuantity, priceForItem, shippingPrice, totalPrice, onRemove,
}) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const { t } = useTranslation();
  const getCurrencyTranslation = (currency) => {
    if (currency === 'IQD') {
      return t('iqd');
    }

    return t('usd');
  };

  return (
    <div className="white-background rounded m-2 p-2">
      <div className="d-flex justify-content-between">
        <div className="orange mt-2">
          <div>{item.supplier_name}</div>
          <div>{item.item_name}</div>
          <div>
            {item.variantOptions ? item.variantOptions.map((vo) => (
              <div className="d-flex" key={makeid(10)}>
                <div>
                  {vo.name}
                  :
                  {' '}
                </div>
                <div>{vo.value}</div>
              </div>
            )) : null}
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div>
              {t('numberOfItems')}
              :
            </div>
            <input className="form-control cart-number-of-items" type="number" value={numberOfItems} onChange={(e) => { setNumberOfItems(e.target.value); setParentQuantity(e.target.value); }} />
          </div>
          <div className="d-flex">
            <span>
              {t('price')}
            </span>
            :
            <span>
              {`${priceForItem} ${getCurrencyTranslation(item.currency)}`}
            </span>
          </div>
          <div className="d-flex">
            <div>
              {t('shippingPrice')}
            </div>
            :
            <span>
              {`${shippingPrice} ${getCurrencyTranslation(item.currency)}`}
            </span>
          </div>
          <div className="d-flex">
            <span>
              {t('total')}
            </span>
            :
            <span>
              {`${totalPrice} ${getCurrencyTranslation(item.currency)}`}
            </span>
          </div>
        </div>
      </div>
      <RoundOrangeIconButton
        buttonText={t('messageSupplier')}
        onPressed={() => { }}
        width="200px"
        padding="5px"
        iconName="chat_bubble_outline"
      />
      <div className="d-flex justify-content-end">
        <button type="button" className="icon-button" onClick={() => { onRemove(); }}>
          <div className="text-danger"><u>{t('removeItem')}</u></div>
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  setParentQuantity: PropTypes.func.isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
