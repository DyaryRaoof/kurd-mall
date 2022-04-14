import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../Shared/ItemCard';
import getAllItems from '../../api/allItems';
import getAllStores from '../../api/allStores';
import Paginator from '../Shared/Paginator';

const AllItems = () => {
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.allStoresReducer.stores);
  const items = useSelector((state) => state.allItemsReducer.items);
  const iterator = state.isStore ? stores : items;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (state.isStore) {
      getAllStores(dispatch, state.subcategoryId, currentPage);
    } else {
      getAllItems(dispatch, state.subcategoryId, currentPage);
    }
  }, [state.subcategoryId, currentPage]);

  return (
    <main>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {iterator.length > 0 && iterator.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            isStore={state.isStore}
          />
        ))}
      </div>
      {iterator.length > 29 && (
      <Paginator
        onChange={(page) => { setCurrentPage(page); }}
        wasLastpage={iterator.length === 0}
      />
      )}
    </main>
  );
};

export default AllItems;
