const GET_MY_STORE_SUCCESS = 'kurd-mall/myStore/GET_MY_STORE_SUCCESS';
const GET_MY_STORE_FAILURE = 'kurd-mall/myStore/GET_MY_STORE_FAILURE';
const GET_MY_STORE_LOADING = 'kurd-mall/myStore/GET_MY_STORE_LOADING';

const initialState = { store: {}, isLoading: false, error: null };

export const getMyStoreSuccess = (payload) => ({
  type: GET_MY_STORE_SUCCESS,
  payload,
});

export const getMyStoreFailure = (payload) => ({
  type: GET_MY_STORE_FAILURE,
  payload,
});

export const getMyStoreLoading = () => ({
  type: GET_MY_STORE_LOADING,
});

const myStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_STORE_SUCCESS:
      return {
        ...state, store: action.payload, isLoading: false, error: null,
      };

    case GET_MY_STORE_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_MY_STORE_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default myStoreReducer;
