const SET_NAV_STORE_OR_ITEM = 'kurd-mall/design/SET_NAV_STORE_OR_ITEM';
const SEARCH_BAR_STARS = 'kurd-mall/design/SEARCH_BAR_STARS';
const SEARCH_BAR_PRICE_FROM = 'kurd-mall/design/SEARCH_BAR_PRICE_FROM';
const SEARCH_BAR_PRICE_TO = 'kurd-mall/design/SEARCH_BAR_PRICE_TO';
const SEARCH_BAR_PRICE_CURRENCY = 'kurd-mall/design/SEARCH_BAR_PRICE_CURRENCY';
const SEARCH_BAR_PRICE_ASCENDING = 'kurd-mall/design/SEARCH_BAR_PRICE_ASCENDING';
const SEARCH_BAR_TEXT = 'kurd-mall/design/SEARCH_BAR_TEXT';

const initialState = {
  navStoreOrItem: 'items',
  searchBarStars: null,
  searchBarPriceFrom: null,
  searchBarText: null,
  searchBarPriceTo: null,
  searchBarPriceCurrency: 'IQD',
  searchBarPriceAscending: true,
};

export const setNavStoreOrItem = (payload) => ({
  type: SET_NAV_STORE_OR_ITEM,
  payload,
});

export const setSearchBarStars = (payload) => ({
  type: SEARCH_BAR_STARS,
  payload,
});

export const setSearchBarPriceFrom = (payload) => ({
  type: SEARCH_BAR_PRICE_FROM,
  payload,
});

export const setSearchBarPriceTo = (payload) => ({
  type: SEARCH_BAR_PRICE_TO,
  payload,
});

export const setSearchBarCurrency = (payload) => ({
  type: SEARCH_BAR_PRICE_CURRENCY,
  payload,
});

export const setsearchBarPriceAscending = (payload) => ({
  type: SEARCH_BAR_PRICE_ASCENDING,
  payload,
});

export const setsearchBarText = (payload) => ({
  type: SEARCH_BAR_TEXT,
  payload,
});

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_STORE_OR_ITEM:
      return { ...state, navStoreOrItem: action.payload };
    case SEARCH_BAR_STARS:
      return { ...state, searchBarStars: action.payload };
    case SEARCH_BAR_PRICE_FROM:
      return { ...state, searchBarPriceFrom: action.payload };
    case SEARCH_BAR_PRICE_TO:
      return { ...state, searchBarPriceTo: action.payload };
    case SEARCH_BAR_PRICE_CURRENCY:
      return { ...state, searchBarPriceCurrency: action.payload };
    case SEARCH_BAR_PRICE_ASCENDING:
      return { ...state, searchBarPriceAscending: action.payload };
    case SEARCH_BAR_TEXT:
      return { ...state, searchBarText: action.payload };
    default:
      return state;
  }
};

export default designReducer;
