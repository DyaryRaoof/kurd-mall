import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MaterialIcon from '../Shared/MateriaIcon';
import Carousel from '../StoreDetailPage/Carousel';
import './ItemDetail.css';
import Stars from '../Shared/Stars';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';
import comment from '../mock-data/comment';
import ItemsCarousel from '../Shared/ItemsCarousel';

const ItemDetail = ({ item }) => {
  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const navigate = useNavigate();

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
          <Carousel images={[
            item.image, item.image, item.image,
            item.image, item.image, item.image,
          ]}
          />
          <div className="row mx-2">
            <div className="col-md-6 mt-3">
              <div className="row  gray-background rounded mx-2">
                <h3>{item.name}</h3>
                <div className="col-6">
                  <div>
                    <div className="orange">
                      {`${item.price} ${item.currency} 
                  + ${item.shippingPrice} ${item.currency} shipping`}
                    </div>
                    <div className="orange">{`${item.price + item.shippingPrice} ${item.currency} total`}</div>
                  </div>

                </div>
                <div className="col-6 ">
                  <Stars number={item.stars} users={item.reviewers} isInteractive />
                  <div className="text-danger">{`Only ${item.leftInStock} are left in stock `}</div>
                </div>
                <div className="mt-2">{item.description}</div>
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <div className="gray-background item-detail-variants-wrapper p-3 mx-2 rounded">
                {item.variants.map((variant) => (
                  <button key={variant.id} type="button" className={`icon-button ${selectedVariant === variant ? 'border border-danger border-2' : ''}`} onClick={() => setSelectedVariant(variant)}>
                    <div className="item-detail-variants">
                      <div className="item-detail-variant-image">
                        <img src={item.images[variant.imageIndex]} alt={variant.name} className="variant-image" />
                      </div>
                      <div className="item-detail-variant-name">{variant.name}</div>
                      <div className="item-detail-variant-price">
                        {`${variant.price} ${item.currency}`}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
          <button className="icon-button" type="button">
            <RoundOrangeIconButton buttonText="Add to cart" iconName="add_shopping_cart" />
          </button>
          <button type="button" className="icon-button mt-3">
            <RoundOrangeIconButton buttonText="Message Seller" iconName="mode_comment" />
          </button>
        </div>

        <div>
          <h3 className="orange">Comments</h3>
          {Array(5).fill(0).map(() => (
            <Comment key={makeid(10)} comment={comment} />
          ))}
          <div className="d-flex justify-content-end">
            <button type="button" className="icon-button" onClick={() => navigate('/see-all-comments', { state: { itemId: item.id } })}>
              <p className="orange"><u>See All Comments</u></p>
            </button>
          </div>

        </div>

        <div>
          <h3 className="orange">Related Items</h3>
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

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    reviewers: PropTypes.number.isRequired,
    leftInStock: PropTypes.number.isRequired,
    storeId: PropTypes.number.isRequired,
    shippingKg: PropTypes.number.isRequired,
    shippingPrice: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageIndex: PropTypes.number.isRequired,
    })).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    categoryId: PropTypes.number.isRequired,
    subcategoryId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;
