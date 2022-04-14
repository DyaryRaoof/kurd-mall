const GET_HOME_STORES_SUCCESS = 'kurd-mall/homeStores/GET_HOME_STORES_SUCCESS';
const GET_HOME_STORES_FAILURE = 'kurd-mall/homeStores/GET_HOME_STORES_FAILURE';
const GET_HOME_STORES_LOADING = 'kurd-mall/homeStores/GET_HOME_STORES_LOADING';

const initialState = { stores: [], isLoading: false, error: null };

export const getHomeStoresSuccess = (payload) => ({
  type: GET_HOME_STORES_SUCCESS,
  payload,
});

export const getHomeStoresFailure = (payload) => ({
  type: GET_HOME_STORES_FAILURE,
  payload,
});

export const gettHomeStoresLoading = () => ({
  type: GET_HOME_STORES_LOADING,
});

const homeStoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_STORES_SUCCESS:
      return {
        ...state, stores: action.payload, isLoading: false, error: null,
      };

    case GET_HOME_STORES_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_HOME_STORES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default homeStoresReducer;
