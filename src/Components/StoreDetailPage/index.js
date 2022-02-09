import PropTypes from 'prop-types';
import Carousel from './Carousel';
import image from '../../images/mocks/image-placeholder.png';
import StoreInfoItem from './StoreInfoItem';
import './StoreDetail.css';

const StoreDetail = (
  { store },
) => {
  const {
    name, description,
    address, phone, city,
    category, subcategory,
    instagram, facebook, location,
  } = store;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <Carousel images={[image, image, image, image, image, image]} />
        </div>
        <div className="col-md-5 mt-5">
          <div className="border border-1 border-top-5 rounded border-warning">
            <hr className="store-detail-top-line orange orange-bg" />
            <StoreInfoItem title="Name" value={name} />
            <StoreInfoItem title="Description" value={description} />
            <StoreInfoItem title="Address" value={address} />
            <StoreInfoItem title="Phone" value={phone} />
            <StoreInfoItem title="City" value={city} />
            <StoreInfoItem title="Category" value={category} />
            <StoreInfoItem title="Subcategory" value={subcategory} />
            <StoreInfoItem title="Instagram" value={instagram} />
            <StoreInfoItem title="Facebook" value={facebook} />
            <StoreInfoItem title="Location" value={location} />
          </div>
        </div>
      </div>
    </div>
  );
};

StoreDetail.propTypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default StoreDetail;
