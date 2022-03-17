import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import ItemsCarousel from '../Shared/ItemsCarousel';
import fetchCategories from '../../api/categories';
import fetchSubcategories from '../../api/subcategories';
import getHomeItems from '../../api/homeItems';

const HomeBody = () => {
  const navStoreOrItem = useSelector((state) => state.designReducer.navStoreOrItem);
  const items = useSelector((state) => state.homeItemsReducer.items);
  const categories = useSelector((state) => state.categoriesReducer.categories) || [];
  const subcategories = useSelector((state) => state.subcategoriesReducer.subcategories) || [];
  const language = localStorage.getItem('language') || 'ku';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories);
    fetchSubcategories(dispatch, 0);
  }, []);

  useEffect(() => {
    const subcategoryIds = [...subcategories].map((sub) => sub.id);
    getHomeItems(dispatch, subcategoryIds, true);
  }, [subcategories]);

  return (
    <main className="container home-main">
      {items.length > 0
        ? [...categories].map(
          (c) => [...subcategories].filter((sub) => sub.category_id === c.id).map((sub) => {
            const subcatItems = items.filter((item) => item.subcategory_id === sub.id);
            if (subcatItems.length === 0) return null;
            return (
              <div className="my-5" key={sub.name}>
                <ItemsCarousel
                  subcategoryName={language === 'ku' ? sub.name_ku : sub.name_en}
                  isStore={navStoreOrItem === 'stores'}
                  items={subcatItems}
                />
              </div>
            );
          }),
        )
        : (
          <h1 className="text-center">
            {t('beFirstToCreateStore')}
            <button
              className="icon-button orange"
              type="button"
              onClick={() => { navigate('/create-store'); }}
            >
              {t('here')}
            </button>
          </h1>
        )}
    </main>

  );
};

export default HomeBody;
