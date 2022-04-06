import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import makeid from '../Shared/methods/makeid';
import Item from './Item';
import Paginator from '../Shared/Paginator';
import getStoreAnalytics from '../../api/storeAnalytics';
import { getItemAnalytics, getSearchItemAnalytics } from '../../api/itemAnalytics';

const Analytics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const storeAnalytics = useSelector((state) => state.storeAnalyticsReducer.storeAnalytic) || {};
  const { store_id: storeId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const items = useSelector((state) => state.itemAnalyticsReducer.items) || [];
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(searchText);
    if (!searchText) {
      getItemAnalytics(dispatch, storeId, 1);
      return;
    }
    getSearchItemAnalytics(dispatch, storeId, searchText);
  };

  useEffect(() => {
    getStoreAnalytics(dispatch, storeId);
    getItemAnalytics(dispatch, storeId, 1);
  }, []);

  useEffect(() => {
    getItemAnalytics(dispatch, storeId, currentPage);
  }, [currentPage]);

  return (
    <main className="container">
      <h1 className="orange">{t('analytics')}</h1>
      <div>
        <div className="gray-background rouded p-2">
          <div className="d-flex justify-content-between">
            <h3 className="orange">{t('store')}</h3>
            <h3 className="orange">{storeAnalytics.store_name}</h3>
            <button type="button" className="icon-button" onClick={() => { navigate(`/store-detail/${storeAnalytics.store_id}`); }}>
              <p><u className="orange">{t('openStore')}</u></p>
            </button>
          </div>
          <div className="p-2 white-background">
            <Item
              key={makeid(10)}
              name={t('viewsLifetime')}
              value={storeAnalytics.lifetime_views}
            />
            <Item
              key={makeid(10)}
              name={t('totalRevenueUSD')}
              value={storeAnalytics.total_revenue_usd}

            />
            <Item
              key={makeid(10)}
              name={t('totalRevenueIQD')}
              value={storeAnalytics.total_revenue_iqd}

            />
            <Item
              key={makeid(10)}
              name={t('totalItemsSold')}
              value={storeAnalytics.total_item_sales}
            />
          </div>
        </div>

        <input
          type="email"
          className="form-control w-100 mt-5"
          aria-describedby="emailHelp"
          placeholder={t('searchForItem')}
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value); }}
          onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch(); } }}
        />

        {items.map((analytic) => (
          <div key={analytic.id} className="gray-background rouded p-2 my-2">
            <div className="d-flex justify-content-between orange">
              <h3 className="orange">{analytic.item_name}</h3>
              <button type="button" className="icon-button" onClick={() => { navigate(`/item-detail/${analytic.item_id}`); }}>
                <p><u className="orange">{t('seeItem')}</u></p>
              </button>
            </div>
            <div className="p-2 white-background">
              <Item
                key={makeid(10)}
                name={t('viewsLifetime')}
                value={analytic.lifetime_views}
              />
              <Item
                key={makeid(10)}
                name={t('totalStars')}
                value={analytic.total_stars}
              />
              <Item
                key={makeid(10)}
                name={t('totalReviews')}
                value={analytic.total_reviews}
              />
              <Item
                key={makeid(10)}
                name={t('totalComments')}
                value={analytic.total_comments}
              />
              <Item
                key={makeid(10)}
                name={t('totalRevenueUSD')}
                value={analytic.total_revenue_usd}
              />
              <Item
                key={makeid(10)}
                name={t('totalRevenueIQD')}
                value={analytic.total_revenue_iqd}
              />
              <Item
                key={makeid(10)}
                name={t('totalItemsSold')}
                value={analytic.total_item_sales}
              />
            </div>
          </div>
        ))}

      </div>
      <div className="d-flex justify-content-center">
        <Paginator
          onChange={(page) => setCurrentPage(page)}
          wasLastpage={items.length === 0 && currentPage !== 1}
        />
      </div>
    </main>
  );
};
export default Analytics;
