import { useSelector } from 'react-redux';
import categories from '../mock-data/categories';
import ItemsCarousel from '../Shared/ItemsCarousel';

const HomeBody = () => {
  const navStoreOrItem = useSelector((state) => state.designReducer.navStoreOrItem);
  return (
    <main className="container">
      {
        categories.map(
          (c) => c.subcategories.map((sub) => (
            <div className="my-5" key={sub.name}>
              <ItemsCarousel
                subcategoryName={sub.name}
                isStore={navStoreOrItem === 'stores'}
              />
            </div>
          )),
        )
      }
    </main>
  );
};

export default HomeBody;
