import PropTypes from 'prop-types';
import MaterialIcon from '../Shared/MateriaIcon';
import Carousel from '../StoreDetailPage/Carousel';
import './ItemDetail.css';

const ItemDetail = ({ item }) => (
  <div>
    <div className="container">
      <div className="d-flex justify-content-between position relative item-detail-top-icons">
        <MaterialIcon text="share" orange isLarge />
        <MaterialIcon text="store" orange isLarge />
      </div>
      <Carousel images={[item.image, item.image, item.image, item.image, item.image, item.image]} />
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
  }).isRequired,
};

export default ItemDetail;
