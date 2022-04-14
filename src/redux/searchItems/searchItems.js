const GET_SEARCH_ITEMS_SUCCESS = 'kurd-mall/searchItems/GET_SEARCH_ITEMS_SUCCESS';
const GET_SEARCH_ITEMS_FAILURE = 'kurd-mall/searchItems/GET_SEARCH_ITEMS_FAILURE';
const GET_SEARCH_ITEMS_LOADING = 'kurd-mall/searchItems/GET_SEARCH_ITEMS_LOADING';

const initialState = { items: [], isLoading: false, error: null };

export const getSearchItemsSuccess = (payload) => ({
  type: GET_SEARCH_ITEMS_SUCCESS,
  payload,
});

export const getSearchItemsFailure = (payload) => ({
  type: GET_SEARCH_ITEMS_FAILURE,
  payload,
});

export const getSearchItemsLoading = () => ({
  type: GET_SEARCH_ITEMS_LOADING,
});

const searchItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ITEMS_SUCCESS:
      return {
        ...state, items: action.payload, isLoading: false, error: null,
      };

    case GET_SEARCH_ITEMS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_SEARCH_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default searchItemsReducer;
