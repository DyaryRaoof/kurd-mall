import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';
import MaterialIcon from '../Shared/MateriaIcon';
import Carousel from '../StoreDetailPage/Carousel';
import './ItemDetail.css';
import Stars from '../Shared/Stars';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';
import comment from '../mock-data/comment';
import ItemsCarousel from '../Shared/ItemsCarousel';
import getShippingPrice from '../Shared/methods/getShippingPrice';

const ItemDetail = () => {
  const location = useLocation();
  const { item } = location.state;
  const [selectedVariant, setSelectedVariant] = useState(item.item_variants[0]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const shippingPrice = getShippingPrice(item.shipping_kg, item.currency);
  //
  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="d-flex justify-content-between position relative item-detail-top-icons">
            <MaterialIcon text="share" orange isLarge />

            <button type="button" className="icon-button" onClick={() => { navigate('/store-detail', { state: item.storeId }); }}>
              <MaterialIcon text="store" orange isLarge />
            </button>
          </div>
          <Carousel images={[...item.image_urls]} />
          <div className="row mx-2">
            <div className="col-md-6 mt-3">
              <div className="row  gray-background rounded mx-2">
                <h3>{item.name}</h3>
                <div className="col-6">
                  <div>
                    <div className="orange">
                      <div className="d-flex">
                        <span>{item.price}</span>
                        <span className="px-2">{item.currency === 'IQD' ? t('iqd') : t('usd')}</span>
                      </div>
                      <div className="d-flex">
                        <span>{shippingPrice}</span>
                        <span className="px-2">{item.currency === 'IQD' ? t('iqd') : t('usd')}</span>
                        <span>{t('shipping')}</span>
                      </div>
                      <div className="d-flex">
                        <span>
                          {item.price + shippingPrice}
                        </span>
                        <span className="px-2">{item.currency === 'IQD' ? t('iqd') : t('usd')}</span>
                        <span>
                          {t('total')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <Stars number={item.stars} users={item.reviewers} isInteractive />
                  <div className="text-danger text-end pe-5">{`${t('only')} ${item.quantity} ${t('leftInStock')} `}</div>
                </div>
              </div>
              <div className="mt-2 ms-1">{item.description}</div>
              <div className="white-text pt-2">
                {item.tags.map((tag) => (
                  <span key={tag.id} className="rounded orange-bg p-1 m-1">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <div className="gray-background item-detail-variants-wrapper p-3 mx-2 rounded">
                {item.item_variants ? item.item_variants.map((variant) => (
                  <button key={variant.id} type="button" className={`icon-button ${selectedVariant === variant ? 'border border-danger border-2' : ''}`} onClick={() => setSelectedVariant(variant)}>
                    <div className="item-detail-variants">
                      <div className="item-detail-variant-image">
                        <img src={item.image_urls[variant.image_index]} alt={variant.name} className="variant-image" />
                      </div>
                      <div className="item-detail-variant-name">{variant.name}</div>
                      <div className="item-detail-variant-price">
                        {`${variant.price} ${item.currency}`}
                      </div>
                    </div>
                  </button>
                )) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <button className="icon-button" type="button">
            <RoundOrangeIconButton buttonText={t('addToCart')} iconName="add_shopping_cart" />
          </button>
          <button type="button" className="icon-button mt-3">
            <RoundOrangeIconButton buttonText={t('messageSupplier')} iconName="mode_comment" />
          </button>
        </div>

        <div>
          <h3 className="orange">{t('comments')}</h3>
          {Array(5).fill(0).map(() => (
            <Comment key={makeid(10)} comment={comment} />
          ))}
          <div className="d-flex justify-content-end">
            <button type="button" className="icon-button" onClick={() => navigate('/see-all-comments', { state: { itemId: item.id } })}>
              <p className="orange"><u>{t('seeAllComments')}</u></p>
            </button>
          </div>

        </div>

        <div>
          <h3 className="orange">{t('relatedItems')}</h3>
          {Array(5).fill(0).map(() => (
            <ItemsCarousel
              key={makeid(10)}
              subcategoryName="Electronics"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

// ItemDetail.propTypes = {
//   item: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     currency: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     stars: PropTypes.number.isRequired,
//     reviewers: PropTypes.number.isRequired,
//     leftInStock: PropTypes.number.isRequired,
//     storeId: PropTypes.number.isRequired,
//     shippingKg: PropTypes.number.isRequired,
//     shippingPrice: PropTypes.number.isRequired,
//     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//     description: PropTypes.string.isRequired,
//     variants: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       imageIndex: PropTypes.number.isRequired,
//     })).isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     categoryId: PropTypes.number.isRequired,
//     subcategoryId: PropTypes.number.isRequired,
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default ItemDetail;
