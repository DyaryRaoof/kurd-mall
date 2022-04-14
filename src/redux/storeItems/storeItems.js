const GET_STORE_ITMES_SUCCESS = 'kurd-mall/storeItems/GET_STORE_ITMES_SUCCESS';
const GET_STORE_ITMES_FAILURE = 'kurd-mall/storeItems/GET_STORE_ITMES_FAILURE';

const initialState = { items: [], error: null };

export const getStoreItemsSuccess = (payload) => ({
  type: GET_STORE_ITMES_SUCCESS,
  payload,
});

export const getStoreItemsFailure = (payload) => ({
  type: GET_STORE_ITMES_FAILURE,
  payload,
});
const storeItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_ITMES_SUCCESS:
      return {
        ...state, items: action.payload, isLoading: false, error: null,
      };
    case GET_STORE_ITMES_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default storeItemsReducer;
