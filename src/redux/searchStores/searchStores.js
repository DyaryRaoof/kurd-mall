const GET_SEARCH_STORES_SUCCESS = 'kurd-mall/searchStores/GET_SEARCH_STORES_SUCCESS';
const GET_SEARCH_STORES_FAILURE = 'kurd-mall/searchStores/GET_SEARCH_STORES_FAILURE';
const GET_SEARCH_STORES_LOADING = 'kurd-mall/searchStores/GET_SEARCH_STORES_LOADING';

const initialState = { stores: [], isLoading: false, error: null };

export const getSearchStoresSuccess = (payload) => ({
  type: GET_SEARCH_STORES_SUCCESS,
  payload,
});

export const getSearchStoresFailure = (payload) => ({
  type: GET_SEARCH_STORES_FAILURE,
  payload,
});

export const getSearchStoresLoading = () => ({
  type: GET_SEARCH_STORES_LOADING,
});

const searchStoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_STORES_SUCCESS:
      return {
        ...state, stores: action.payload, isLoading: false, error: null,
      };

    case GET_SEARCH_STORES_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_SEARCH_STORES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default searchStoresReducer;
