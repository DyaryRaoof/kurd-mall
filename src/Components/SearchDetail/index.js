import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ItemCard from '../Shared/ItemCard';
import Paginator from '../Shared/Paginator';
import {
  setSearchBarCurrency,
  setSearchBarPriceFrom,
  setSearchBarPriceTo,
  setsearchBarPriceAscending,
} from '../../redux/design/design';
import './SearchDetail.css';
import getSearchItems from '../../api/searchItem';

const SearchDetail = () => {
  const items = useSelector((state) => state.searchItemsReducer.items);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [highToLow, setHighToLow] = useState(false);
  const resultsNumber = 2000;
  const [currentPage, setCurrentPage] = useState(1);
  const [currency, setCurrency] = useState('IQD');
  const stars = useSelector((state) => state.designReducer.searchBarStars);
  const priceFrom = useSelector((state) => state.designReducer.searchBarPriceFrom);
  const priceTo = useSelector((state) => state.designReducer.searchBarPriceTo);
  const ascending = useSelector((state) => state.designReducer.searchBarPriceAscending);
  const text = useSelector((state) => state.designReducer.searchBarText);

  useEffect(() => {
    getSearchItems(dispatch,
      text,
      currency, priceFrom,
      priceTo,
      stars,
      ascending,
      currentPage);
  }, [currentPage]);

  return (
    <main className="container">
      <h1>{t('searchResults')}</h1>
      <div className="d-flex justify-content-between">
        <div>
          <span>{`${t('showing20')} ${t('outOf')} ${resultsNumber} ${t('results')}`}</span>
        </div>
        <button
          type="button"
          className="btn btn-outline-warning rounded-pill order-by-button orange"
          onClick={() => {
            setHighToLow(!highToLow);
            dispatch(setsearchBarPriceAscending(!highToLow));
          }}
        >
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
                <input className="form-control" type="number" min={0} onChange={(e) => dispatch(setSearchBarPriceFrom(e.target.value))} />
                {currency === 'IQD' ? t('iqd') : t('usd')}
              </div>
              <div className="orange mx-1">
                To
              </div>
              <div className="d-flex align-items-center">
                <input className="form-control" type="number" min={0} onChange={(e) => dispatch(setSearchBarPriceTo(e.target.value))} />
                {currency === 'IQD' ? t('iqd') : t('usd')}
              </div>
            </div>
            <div className="d-flex ms-auto me-2 my-2">
              <span className="me-2">{t('iqd')}</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onChange={() => {
                    setCurrency(currency === 'IQD' ? 'USD' : 'IQD');
                    dispatch(setSearchBarCurrency(currency === 'IQD' ? 'USD' : 'IQD'));
                  }}
                />
              </div>
              {' '}
              {t('usd')}
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
                  item={item}
                  isSearchItem
                />
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Paginator
              wasLastpage={items.length === 0}
              onChange={(page) => { setCurrentPage(page); }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchDetail;
