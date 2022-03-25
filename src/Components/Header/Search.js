import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import getSearchItems from '../../api/searchItem';
import { setsearchBarText } from '../../redux/design/design';

const Search = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const stars = useSelector((state) => state.designReducer.searchBarStars);
  const priceFrom = useSelector((state) => state.designReducer.searchBarPriceFrom);
  const priceTo = useSelector((state) => state.designReducer.searchBarPriceTo);
  const currency = useSelector((state) => state.designReducer.searchBarPriceCurrency) || 'IQD';
  const ascending = useSelector((state) => state.designReducer.searchBarPriceAscending);

  return (
    <div className="mx-auto w-75 ">
      <input
        type="text"
        className="form-control w-100"
        aria-describedby="emailHelp"
        placeholder={t('search')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            getSearchItems(dispatch,
              e.target.value,
              currency, priceFrom,
              priceTo,
              stars,
              ascending,
              1);
            dispatch(setsearchBarText(e.target.value));
            if (location.pathname !== '/search-detail') {
              navigate('/search-detail');
            }
          }
        }}
      />
    </div>
  );
};
export default Search;
