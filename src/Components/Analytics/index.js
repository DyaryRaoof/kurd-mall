import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import makeid from '../Shared/methods/makeid';
import analytics from '../mock-data/analytics';
import Item from './Item';
import Pagination from '../Shared/Pagination';
import getStoreAnalytics from '../../api/storeAnalytics';

const Analytics = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const storeAnalytics = useSelector((state) => state.storeAnalyticsReducer.storeAnalytic) || {};
  const { store_id: storeId } = useParams();

  const itemAnalytics = analytics.filter((analytic) => !analytic.isStore);

  const analyticNames = [t('viewsThisWeek'),
    t('viewsToday'), t('viewsLifetime'), t('totalStars'),
    t('totalReviews'), t('totalShares'), t('totalComments'),
    t('totalRevenueUSD'), t('totalRevenueIQD'), t('totalItemsSold'),
  ];

  useEffect(() => {
    getStoreAnalytics(dispatch, storeId);
  }, []);

  return (
    <main className="container">
      <h1 className="orange">{t('analytics')}</h1>
      <div>
        <div className="gray-background rouded p-2">
          <h3 className="orange">{t('store')}</h3>
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

        <input type="email" className="form-control w-100 mt-5" aria-describedby="emailHelp" placeholder={t('searchForItem')} />

        {itemAnalytics.map((analytic) => (
          <div key={analytic.id} className="gray-background rouded p-2 my-2">
            <div className="d-flex justify-content-between orange">
              <h3 className="orange">{analytic.itemName}</h3>
              <p><u>{t('seeItem')}</u></p>

            </div>
            <div className="p-2 white-background">
              {Object.values(analytic)
                .slice(5, Object.values(analytic).length)
                .map((analytic, index) => (
                  <Item
                    key={makeid(10)}
                    name={analyticNames[index]}
                    value={analytic}
                  />
                ))}
            </div>
          </div>
        ))}

      </div>
      <div className="d-flex justify-content-center">
        <Pagination onPageChange={() => { }} currentPage={0} totalPages={3} />
      </div>
    </main>
  );
};
export default Analytics;
