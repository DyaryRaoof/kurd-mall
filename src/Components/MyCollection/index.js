import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ItemCard from '../Shared/ItemCard';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import getMyStore from '../../api/myStore';
import getMyItems from '../../api/myItems';
import Paginator from '../Shared/Paginator';

const MyCollection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.myStoreReducer.store) || {};
  const items = useSelector((state) => state.myItemsReducer.items) || {};
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMyStore(dispatch, userId);
    getMyItems(dispatch, userId, currentPage);
  }, []);

  useEffect(() => {
    getMyItems(dispatch, userId, currentPage);
  }, [currentPage]);

  return (
    <main className="container">
      <h3 className="orange my-2">{t('myCollection')}</h3>
      <div className="d-flex justify-content-start">
        <div>
          <ItemCard
            item={store}
            isStore
          />
        </div>
        <RoundOrangeIconButton iconName="trending_up" buttonText={t('analytics')} isLarge onPressed={() => navigate('/analytics')} />

      </div>
      <hr className="orange" />
      <div>
        <div className="d-flex justify-content-start flex-wrap">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
        {!(items.length < 30 && currentPage === 1) && (
          <Paginator
            onChange={(page) => { setCurrentPage(page); }}
            wasLastpage={items.length === 0}
          />
        )}
      </div>

    </main>
  );
};
export default MyCollection;
