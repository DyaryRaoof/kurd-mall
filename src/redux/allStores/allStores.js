const GET_ALL_STORES_SUCCESS = 'kurd-mall/allStores/GET_ALL_STORES_SUCCESS';
const GET_ALL_STORES_FAILURE = 'kurd-mall/allStores/GET_ALL_STORES_FAILURE';
const GET_ALL_STORES_LOADING = 'kurd-mall/allStores/GET_ALL_STORES_LOADING';

const initialState = { stores: [], isLoading: false, error: null };

export const getAllStoreSuccess = (payload) => ({
  type: GET_ALL_STORES_SUCCESS,
  payload,
});

export const getAllStoreFailure = (payload) => ({
  type: GET_ALL_STORES_FAILURE,
  payload,
});

export const gettAllStoreLoading = () => ({
  type: GET_ALL_STORES_LOADING,
});

const allStoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STORES_SUCCESS:
      return {
        ...state, stores: action.payload, isLoading: false, error: null,
      };

    case GET_ALL_STORES_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_ALL_STORES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default allStoresReducer;
