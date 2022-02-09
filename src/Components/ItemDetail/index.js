import PropTypes from 'prop-types';
import MaterialIcon from '../Shared/MateriaIcon';
import Carousel from '../StoreDetailPage/Carousel';
import './ItemDetail.css';
import Stars from '../Shared/Stars';

const ItemDetail = ({ item }) => (
  <div>
    <div className="container">
      <div className="row">

        <div className="d-flex justify-content-between position relative item-detail-top-icons">
          <MaterialIcon text="share" orange isLarge />
          <MaterialIcon text="store" orange isLarge />
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
                    {`${item.price.value} ${item.price.currency} 
                + ${item.shippingPrice.value} ${item.shippingPrice.currency} shipping`}
                  </div>
                  <div className="orange">{`${item.price.value + item.shippingPrice.value} ${item.price.currency} total`}</div>
                </div>

              </div>
              <div className="col-6 ">
                <Stars number={item.stars.count} users={item.stars.users} />
                <div className="text-danger">{`Only ${item.leftInStock} are left in stock `}</div>
              </div>
              <div className="mt-2">{item.description}</div>
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <div className="gray-background item-detail-variants-wrapper p-3 mx-2">
              {item.variants.map((variant) => (
                <button key={variant.id} type="button" className="icon-button">
                  <div className="item-detail-variants">
                    <div className="item-detail-variant-image">
                      <img src={item.images[variant.imageIndex]} alt={variant.name} className="variant-image" />
                    </div>
                    <div className="item-detail-variant-name">{variant.name}</div>
                    <div className="item-detail-variant-price">
                      {`${variant.price.value} ${variant.price.currency}`}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    stars: PropTypes.shape({
      count: PropTypes.number.isRequired,
      users: PropTypes.number.isRequired,
    }).isRequired,
    leftInStock: PropTypes.number.isRequired,
    storeId: PropTypes.number.isRequired,
    shippingKg: PropTypes.number.isRequired,
    shippingPrice: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.shape({
        value: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired,
      imageIndex: PropTypes.number.isRequired,
    })).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ItemDetail;
