import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Carousel from './Carousel';
import StoreInfoItem from './StoreInfoItem';
import './StoreDetail.css';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import MaterialIcon from '../Shared/MateriaIcon';
import LocationWidget from '../Shared/LocatoinWidget';
import getStoreDetail from '../../api/storeDetail';

const StoreDetail = () => {
  let { store } = useLocation().state;
  const { storeId } = useLocation().state;
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const subcategories = JSON.parse(localStorage.getItem('subcategories')) || [];
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  const fetchedStore = useSelector((state) => state.storeDetailReducer.store);
  const {
    name, description,
    address, phone, city_id: cityId,
    category_id: cateogryId, subcategory_id: subcategoryId,
    instagram, facebook, locaation_long: locationLong, location_lat: locationLat,
    image_urls: imageURLs,
  } = store || fetchedStore || {};

  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const category = categories.find((category) => category.id === cateogryId);
  const subcategory = subcategories.find((subcategory) => subcategory.id === subcategoryId);
  const city = cities.find((city) => city.id === cityId);

  const language = localStorage.getItem('language');

  useEffect(() => {
    if (storeId) {
      getStoreDetail(dispatch, storeId);
    }
  }, []);

  useEffect(() => {
    store = fetchedStore;
  }, [fetchedStore]);

  return fetchedStore || store ? (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mt-5">
          <Carousel images={imageURLs || []} />
        </div>
        <div className="col-md-5 mt-5">
          <div className="border border-1 border-top-5 rounded border-warning">
            <StoreInfoItem title={t('name')} value={name} />
            <StoreInfoItem title={t('description')} value={description} />
            <StoreInfoItem title={t('address')} value={address} />
            <StoreInfoItem title={t('phone')} value={phone.toString()} />
            <StoreInfoItem title={t('city')} value={language === 'ku' ? city.name_ku : city.name_en} />
            <StoreInfoItem title={t('category')} value={language === 'ku' ? category.name_ku : category.name_en} />
            <StoreInfoItem title={t('subcategory')} value={language === 'ku' ? subcategory.name_ku : subcategory.name_en} />
            <StoreInfoItem title={t('instagram')} value={instagram} />
            <StoreInfoItem title={t('facebook')} value={facebook} />
            <div className="my-2">
              <LocationWidget position={{ long: locationLong, lat: locationLat }} />
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="icon-button" onClick={() => { navigate('/create-store', { state: store }); }}>
                <MaterialIcon text="create" orange />
              </button>
            </div>
          </div>
        </div>
      </div>
      <RoundOrangeIconButton buttonText={t('addItem')} iconName="add_circle" onPressed={() => navigate('/create-item')} />
      {/* items here */}
    </div>
  )
    : <div />;
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
