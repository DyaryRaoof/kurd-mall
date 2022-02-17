import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../Shared/ItemCard';
import store from '../mock-data/store';
import items from '../mock-data/items';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';

const MyCollection = () => {
  const { t } = useTranslation();
  const currentItems = [...items, ...items];
  const navigate = useNavigate();

  return (
    <main className="container">
      <h3 className="orange my-2">{t('myCollection')}</h3>
      <div className="d-flex justify-content-start">
        <div>
          <ItemCard
            name={store.name}
            stars={store.stars}
            image={store.image}
            isStore
            reviewers={store.reviewers}
            id={store.id}
          />
        </div>
        <RoundOrangeIconButton iconName="trending_up" buttonText={t('analytics')} isLarge onPressed={() => navigate('/analytics')} />

      </div>
      <hr className="orange" />
      <div>
        <div className="d-flex justify-content-center flex-wrap">
          {currentItems.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              stars={item.stars}
              price={item.price}
              currency={item.currency}
              image={item.image}
              leftInStock={item.leftInStock}
              isStore={false}
              reviewers={item.reviewers}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default MyCollection;
