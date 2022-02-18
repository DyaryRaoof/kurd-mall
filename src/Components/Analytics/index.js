import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import makeid from '../Shared/methods/makeid';
import analytics from '../mock-data/analytics';
import Item from './Item';
import Pagination from '../Shared/Pagination';

const Analytics = ({ storeId }) => {
  const { t } = useTranslation();

  const storeAnalytics = analytics.filter((analytic) => analytic.storeId === storeId
    && analytic.isStore)[0];
  const itemAnalytics = analytics.filter((analytic) => !analytic.isStore);

  const analyticNames = [t('viewsThisWeek'),
    t('viewsToday'), t('viewsLifetime'), t('totalStars'),
    t('totalReviews'), t('totalShares'), t('totalComments'),
    t('totalRevenueUSD'), t('totalRevenueIQD'), t('totalItemsSold'),
  ];

  return (
    <main className="container">
      <h1 className="orange">{t('analytics')}</h1>
      <div>
        <div className="gray-background rouded p-2">
          <h3 className="orange">{t('store')}</h3>
          <div className="p-2 white-background">
            {Object.values(storeAnalytics)
              .slice(5, Object.values(storeAnalytics).length)
              .map((analytic, index) => (
                <Item
                  key={makeid(10)}
                  name={analyticNames[index]}
                  value={analytic}
                />
              ))}
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

Analytics.propTypes = {
  storeId: PropTypes.number.isRequired,
};

export default Analytics;
