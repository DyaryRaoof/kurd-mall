import backend from './backend';
import { getItemAnalyticsSuccess, getItemAnalyticsFailure } from '../redux/itemAnalytics/itemAnalytics';

export const postItemView = async (itemId, itemName, storeId) => {
  try {
    const response = await backend.post(`item_analytics/views?item_id=${itemId}&item_name=${itemName}&store_id=${storeId}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const getItemAnalytics = async (dispatch, storeId, page) => {
  try {
    const response = await backend.get(`item_analytics?store_id=${storeId}&page=${page}`);
    dispatch(getItemAnalyticsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getItemAnalyticsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export const getSearchItemAnalytics = async (dispatch, storeId, itemName) => {
  try {
    const response = await backend.get(`item_analytics/search?store_id=${storeId}&item_name=${itemName}`);
    dispatch(getItemAnalyticsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getItemAnalyticsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};
