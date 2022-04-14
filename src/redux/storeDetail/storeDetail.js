const GET_STORE_DETAIL_SUCCESS = 'kurd-mall/storeDetail/GET_STORE_DETAIL_SUCCESS';
const GET_STORE_DETAIL_FAILURE = 'kurd-mall/storeDetail/GET_STORE_DETAIL_FAILURE';
const GET_STORE_DETAIL_LOADING = 'kurd-mall/storeDetail/GET_STORE_DETAIL_LOADING';

const initialState = { store: null, isLoading: false, error: null };

export const getStoreDetailSuccess = (payload) => ({
  type: GET_STORE_DETAIL_SUCCESS,
  payload,
});

export const getStoreDetailFailure = (payload) => ({
  type: GET_STORE_DETAIL_FAILURE,
  payload,
});

export const getStoreDetailLoading = () => ({
  type: GET_STORE_DETAIL_LOADING,
});

const storeDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_DETAIL_SUCCESS:
      return {
        ...state, store: action.payload, isLoading: true, error: null,
      };

    case GET_STORE_DETAIL_FAILURE:
      return { ...state, errors: action.payload };
    case GET_STORE_DETAIL_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default storeDetailReducer;
