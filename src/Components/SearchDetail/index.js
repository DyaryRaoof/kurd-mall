import { useState } from 'react';
import './SearchDetail.css';
import { useTranslation } from 'react-i18next';
import items from '../mock-data/items';
import ItemCard from '../Shared/ItemCard';
import Pagination from '../Shared/Pagination';

const SearchDetail = () => {
  const [highToLow, setHighToLow] = useState(false);
  const [currency, setCurrency] = useState('IQD');

  const { t } = useTranslation();
  const resultsNumber = 2000;
  return (
    <main className="container">
      <h1>{t('searchResults')}</h1>
      <div className="d-flex justify-content-between">
        <div>
          <span>{`${t('showing20')} ${t('outOf')} ${resultsNumber} ${t('results')}`}</span>
        </div>
        <button type="button" className="btn btn-outline-warning rounded-pill order-by-button orange" onClick={() => setHighToLow(!highToLow)}>
          {`${t('orderBy')}:${!highToLow ? t('lowToHigh') : t('highToLow')}`}
        </button>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div>
            <div className="orange fw-bold">
              {t('price')}
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <input className="form-control" type="number" />
                {currency === 'IQD' ? t('iqd') : t('usd')}
              </div>
              <div className="orange mx-1">
                To
              </div>
              <div className="d-flex align-items-center">
                <input className="form-control" type="number" />
                {currency === 'IQD' ? t('iqd') : t('usd')}
              </div>
            </div>
            <div className="d-flex ms-auto me-2 my-2">
              <span className="me-2">{t('iqd')}</span>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={() => { setCurrency(currency === 'IQD' ? 'USD' : 'IQD'); }} />
              </div>
              {' '}
              {t('usd')}
            </div>
            <div>
              <div className="orange fw-bold">
                {t('stars')}
                <input className="form-control" type="number" />
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-9">
          <div className="d-flex">
            <div className="vertical-line d-none d-sm-block" />
            <div>
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  stars={item.stars}
                  price={item.price}
                  image={item.image}
                  leftInStock={item.leftInStock}
                  isSearchItem
                />
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Pagination currentPage={1} totalPages={10} onPageChange={() => { }} />
          </div>

        </div>
      </div>
    </main>
  );
};

export default SearchDetail;
