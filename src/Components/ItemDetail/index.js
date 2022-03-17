import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Collapse } from 'bootstrap';

import MaterialIcon from '../Shared/MateriaIcon';
import Carousel from '../StoreDetailPage/Carousel';
import './ItemDetail.css';
import Stars from '../Shared/Stars';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';
import getShippingPrice from '../Shared/methods/getShippingPrice';
import getRelatedItems from '../../api/relatedItems';
import ItemCard from '../Shared/ItemCard';
import CollapsableShare from '../Shared/CollapsableShare';

const ItemDetail = () => {
  const location = useLocation();
  const { item } = location.state;
  const [selectedVariant, setSelectedVariant] = useState(item.item_variants[0]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const shippingPrice = getShippingPrice(item.shipping_kg, item.currency);
  const dispatch = useDispatch();
  const relatedItems = useSelector((state) => state.relatedItemsReducer.items);

  useEffect(() => {
    getRelatedItems(dispatch, item);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">

          <div className="d-flex justify-content-between align-items-start position relative item-detail-top-icons">
            <div>
              <button
                type="button"
                className="icon-button"
                onClick={() => {
                  new Collapse(document.querySelector('#share-collapse')).collapse({ toggle: true });
                }}
              >
                <MaterialIcon text="share" orange isLarge />
              </button>
              <CollapsableShare />
            </div>

            <button type="button" className="icon-button" onClick={() => { navigate('/store-detail', { state: { storeId: item.store_id } }); }}>
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
                  <Stars item={item} stars={item.stars} isInteractive />
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
                      <div className="item-detail-variant-name">{variant.value}</div>
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
          {item.latest_5_comments.map((comment) => (
            <Comment key={makeid(10)} comment={comment} />
          ))}
          <div className="d-flex justify-content-end">
            <button type="button" className="icon-button" onClick={() => navigate('/see-all-comments', { state: { itemId: item.id } })}>
              <p className="orange"><u>{item.latest_5_comments.length > 0 ? t('seeAllComments') : t('writeComment')}</u></p>
            </button>
          </div>

        </div>

        <div>
          {relatedItems.length > 0 && <h3 className="orange">{t('relatedItems')}</h3>}
          <div className="d-flex flex-wrap justify-content-start">
            {relatedItems.length > 0
              && relatedItems.map((item) => (<ItemCard key={item.id} item={item} />))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemDetail;
