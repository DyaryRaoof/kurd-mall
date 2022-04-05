const GET_ITEM_ANALYTICS_SUCCESS = 'kurd-mall/getItemAnalytics/GET_ITEM_ANALYTICS_SUCCESS';
const GET_ITEM_ANALYTICS_FAILURE = 'kurd-mall/getItemAnalytics/GET_ITEM_ANALYTICS_FAILURE';

const initialState = {
  items: [], errors: null,
};

export const getItemAnalyticsSuccess = (payload) => ({
  type: GET_ITEM_ANALYTICS_SUCCESS,
  payload,
});

export const getItemAnalyticsFailure = (payload) => ({
  type: GET_ITEM_ANALYTICS_FAILURE,
  payload,
});

const itemAnalyticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM_ANALYTICS_SUCCESS:
      return {
        ...state, items: action.payload, errors: null,
      };
    case GET_ITEM_ANALYTICS_FAILURE:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};

export default itemAnalyticsReducer;
