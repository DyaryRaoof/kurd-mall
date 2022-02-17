import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import image from '../../images/mocks/image-placeholder.png';
import StoreInfoItem from './StoreInfoItem';
import './StoreDetail.css';
import categories from '../mock-data/categories';
import ItemsCarousel from '../Shared/ItemsCarousel';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import MaterialIcon from '../Shared/MateriaIcon';

const StoreDetail = (
  { store },
) => {
  const {
    name, description,
    address, phone, city,
    category, subcategory,
    instagram, facebook, location,
  } = store;

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mt-5">
          <Carousel images={[image, image, image, image, image, image]} />
        </div>
        <div className="col-md-5 mt-5">
          <div className="border border-1 border-top-5 rounded border-warning">
            <StoreInfoItem title={t('name')} value={name} />
            <StoreInfoItem title={t('description')} value={description} />
            <StoreInfoItem title={t('address')} value={address} />
            <StoreInfoItem title={t('phone')} value={phone} />
            <StoreInfoItem title={t('city')} value={city} />
            <StoreInfoItem title={t('category')} value={category} />
            <StoreInfoItem title={t('subcategory')} value={subcategory} />
            <StoreInfoItem title={t('instagram')} value={instagram} />
            <StoreInfoItem title={t('facebook')} value={facebook} />
            <StoreInfoItem title={t('location')} value={location} />
            <div className="d-flex justify-content-end">
              <button type="button" className="icon-button" onClick={() => { navigate('/create-store', { state: store }); }}>
                <MaterialIcon text="create" orange />
              </button>
            </div>
          </div>
        </div>
      </div>
      <RoundOrangeIconButton buttonText={t('addItem')} iconName="add_circle" onPressed={() => navigate('/create-item')} />
      {
        categories.map(
          (c) => c.subcategories.map((sub) => (
            <div className="my-5" key={sub.id}>
              <ItemsCarousel
                subcategoryName={sub.name}
              />
            </div>
          )),
        )
      }
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
