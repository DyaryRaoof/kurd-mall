import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import makeid from './methods/makeid';

const CartTop = ({
  item, priceForItem, shippingPrice, totalPrice,
}) => {
  const { t } = useTranslation();

  return (
    <div>
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
            <div className="d-flex">
              <span>{t('numberOfItems')}</span>
              :
              <span>{item.quantity}</span>
            </div>
          </div>
          <div className="d-flex">
            <span>{t('price')}</span>
            :
            <span>
              {' '}
              {`${priceForItem} ${item.currency}`}
            </span>
          </div>
          <div className="d-flex">
            <span>
              {' '}
              {t('shippingPrice')}
            </span>
            :
            <span>{`${shippingPrice} ${item.currency}`}</span>
          </div>
          <div className="d-flex">
            <span>{t('total')}</span>
            :
            <span>
              {`${totalPrice} ${item.currency}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
CartTop.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  priceForItem: PropTypes.func.isRequired,
  shippingPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.func.isRequired,
};

export default CartTop;
