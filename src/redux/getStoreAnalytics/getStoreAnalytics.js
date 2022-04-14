const GET_STORE_ANALYTICS_SUCCESS = 'kurd-mall/getStoreAnalytics/GET_STORE_ANALYTICS_SUCCESS';
const GET_STORE_ANALYTICS_FAILURE = 'kurd-mall/getStoreAnalytics/GET_STORE_ANALYTICS_FAILURE';

const initialState = {
  storeAnalytic: null, errors: null,
};

export const getStoreAnalyticsSuccess = (payload) => ({
  type: GET_STORE_ANALYTICS_SUCCESS,
  payload,
});

export const getStoreAnalyticsFailure = (payload) => ({
  type: GET_STORE_ANALYTICS_FAILURE,
  payload,
});

const storeAnalyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORE_ANALYTICS_SUCCESS:
      return {
        ...state, storeAnalytic: action.payload, errors: null,
      };

    case GET_STORE_ANALYTICS_FAILURE:
      return { ...state, errors: action.payload, storeAnalytic: null };
    default:
      return state;
  }
};

export default storeAnalyticsReducer;
