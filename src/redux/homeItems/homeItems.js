const GET_HOME_ITEMS_SUCCESS = 'kurd-mall/homeItems/GET_HOME_ITEMS_SUCCESS';
const GET_HOME_ITEMS_FAILURE = 'kurd-mall/homeItems/GET_HOME_ITEMS_FAILURE';
const GET_HOME_ITEMS_LOADING = 'kurd-mall/homeItems/GET_HOME_ITEMS_LOADING';

const initialState = { items: [], isLoading: false, error: null };

export const getHomeItemSuccess = (payload) => ({
  type: GET_HOME_ITEMS_SUCCESS,
  payload,
});

export const getHomeItemFailure = (payload) => ({
  type: GET_HOME_ITEMS_FAILURE,
  payload,
});

export const gettHomeItemLoading = () => ({
  type: GET_HOME_ITEMS_LOADING,
});

const homeItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_ITEMS_SUCCESS:
      if (action.payload.replaceItems) {
        return {
          ...state, items: action.payload.items, isLoading: false, error: null,
        };
      }
      return {
        ...state, items: [...state.items, ...action.payload.items], isLoading: true, error: null,
      };

    case GET_HOME_ITEMS_FAILURE:
      return { ...state, errors: action.payload };
    case GET_HOME_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default homeItemsReducer;
