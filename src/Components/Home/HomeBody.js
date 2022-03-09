import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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
  const paginationNumber = 10;
  const [currenctSubcategoryIndex, setCurrentSubcategoryIndex] = useState(paginationNumber);
  const dispatch = useDispatch();
  const isBottom = (el) => el.getBoundingClientRect().bottom <= window.innerHeight;

  const loadNextItems = async () => {
    const storageSubcategories = JSON.parse(localStorage.getItem('subcategories'));

    const subcategoryIds = [...storageSubcategories].map((sub) => sub.id)
      .slice(currenctSubcategoryIndex + 1, currenctSubcategoryIndex + paginationNumber);

    await getHomeItems(dispatch, subcategoryIds);

    if (currenctSubcategoryIndex < storageSubcategories.length) {
      setCurrentSubcategoryIndex(currenctSubcategoryIndex + paginationNumber);
    }
  };

  const trackScrolling = () => {
    const wrappedElement = document.querySelector('.home-main');
    if (isBottom(wrappedElement)) {
      document.removeEventListener('scroll', trackScrolling);
      loadNextItems();
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);

    return () => {
      document.removeEventListener('scroll', trackScrolling);
    };
  }, [currenctSubcategoryIndex]);

  useEffect(() => {
    dispatch(fetchCategories);
    fetchSubcategories(dispatch, 0);
  }, []);

  useEffect(() => {
    const subcategoryIds = [...subcategories].map((sub) => sub.id)
      .slice(0, currenctSubcategoryIndex);
    getHomeItems(dispatch, subcategoryIds);
  }, [subcategories]);

  return (
    <main className="container home-main">
      {
        [...categories].map(
          (c) => [...subcategories].filter((sub) => sub.category_id === c.id
            && sub.id <= currenctSubcategoryIndex).map((sub) => (
              <div className="my-5" key={sub.name}>
                <ItemsCarousel
                  subcategoryName={language === 'ku' ? sub.name_ku : sub.name_en}
                  isStore={navStoreOrItem === 'stores'}
                  items={items.filter((item) => item.subcategory_id === sub.id)}
                />
              </div>
          )),
        )
      }
    </main>
  );
};

export default HomeBody;
