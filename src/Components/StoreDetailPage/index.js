import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import StoreInfoItem from './StoreInfoItem';
import './StoreDetail.css';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import MaterialIcon from '../Shared/MateriaIcon';
import LocationWidget from '../Shared/LocatoinWidget';
import getStoreDetail from '../../api/storeDetail';
import getStoreItems from '../../api/storeItems';
import ItemCard from '../Shared/ItemCard';
import Paginator from '../Shared/Paginator';
import postStoreView from '../../api/storeVIews';

const StoreDetail = () => {
  let { store } = useLocation().state || {};
  const { id: storeId } = useParams();
  const categories = JSON.parse(localStorage.getItem('categories')) || [];
  const subcategories = JSON.parse(localStorage.getItem('subcategories')) || [];
  const cities = JSON.parse(localStorage.getItem('cities')) || [];
  const fetchedStore = useSelector((state) => state.storeDetailReducer.store);
  const {
    name,
    description,
    address,
    phone,
    city_id: cityId,
    category_id: cateogryId,
    subcategory_id: subcategoryId,
    instagram, facebook,
    locaation_long: locationLong,
    location_lat: locationLat,
    image_urls: imageURLs,
    user_id: userId,
  } = store || fetchedStore || {};

  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const category = categories.find((category) => category.id === cateogryId);
  const subcategory = subcategories.find((subcategory) => subcategory.id === subcategoryId);
  const city = cities.find((city) => city.id === cityId);
  const language = localStorage.getItem('language');

  const storeItems = useSelector((state) => state.storeItemsReducer.items);
  const [currentPage, setCurrentPage] = useState(1);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(async () => {
    if ((store === {} || !store) && storeId) {
      await getStoreDetail(dispatch, storeId);
    }

    postStoreView(store.id, store.name);

    getStoreItems(dispatch, store ? store.id : storeId, 1);
  }, []);

  useEffect(() => {
    getStoreItems(dispatch, store ? store.id : storeId, currentPage);
  }, [currentPage]);

  useEffect(() => {
    store = fetchedStore;
  }, [fetchedStore]);

  const checkUserOwnsStore = () => {
    if (user) {
      return user.id === userId;
    }
    return false;
  };

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
            <StoreInfoItem title={t('phone')} value={phone.toString()} isLink href={`tel:${phone}`} />
            <StoreInfoItem title={t('city')} value={language === 'ku' ? city.name_ku : city.name_en} />
            <StoreInfoItem title={t('category')} value={language === 'ku' ? category.name_ku : category.name_en} />
            <StoreInfoItem title={t('subcategory')} value={language === 'ku' ? subcategory.name_ku : subcategory.name_en} />
            <StoreInfoItem title={t('instagram')} value={instagram} isLink href={instagram} />
            <StoreInfoItem title={t('facebook')} value={facebook} isLink href={facebook} />
            <div className="my-2">
              <LocationWidget position={{ long: locationLong, lat: locationLat }} />
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="icon-button"
                onClick={() => {
                  navigate('/create-store', { state: { store, isUpdate: true } });
                }}
              >
                <MaterialIcon text="create" orange />
              </button>
            </div>
          </div>
        </div>
      </div>
      {checkUserOwnsStore && (
        <div className="d-flex justify-content-center">
          <RoundOrangeIconButton buttonText={t('addItem')} iconName="add_circle" onPressed={() => navigate('/create-item')} />
        </div>
      )}
      <div className="d-flex flex-wrap justify-content-center mt-5">
        {storeItems.map((item) => (
          <ItemCard key={item.id} item={item} isStore={false} />
        ))}
      </div>
      <Paginator
        onChange={(page) => setCurrentPage(page)}
        wasLastpage={currentPage !== 1 && storeItems.length === 0}
      />
    </div>
  ) : (
    <div />
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
