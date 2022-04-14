const POST_STORE_SUCCESS = 'kurd-mall/stores/POST_STORES_SUCCESS';
const POST_STORE_FAILURE = 'kurd-mall/stores/POST_STORES_FAILURE';
const POST_STORE_LOADING = 'kurd-mall/stores/POST_STORES_LOADING';

const initialState = { stores: [], isLoading: false, error: null };

export const postStoreSuccess = (payload) => ({
  type: POST_STORE_SUCCESS,
  payload,
});

export const postStoreFailure = (payload) => ({
  type: POST_STORE_FAILURE,
  payload,
});

export const postStoreLoading = () => ({
  type: POST_STORE_LOADING,
});

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_STORE_SUCCESS:
      return {
        ...state, store: action.payload, isLoading: true, error: null,
      };
    case POST_STORE_FAILURE:
      return { ...state, errors: action.payload };
    case POST_STORE_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default storesReducer;
