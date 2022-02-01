import './HomeBody.css';
import categories from '../mock-data/categories';
import ItemsCarousel from '../Shared/ItemsCarousel';

const HomeBody = () => (
  <main className="container">
    {
      categories.map(
        (c) => c.subcategories.map((sub) => (
          <div className="my-5" key={sub.name}>
            <ItemsCarousel
              subcategoryName={sub.name}
            />
          </div>
        )),
      )
    }
  </main>
);

export default HomeBody;
