import backend from './backend';
import { getStoreAnalyticsSuccess, getStoreAnalyticsFailure } from '../redux/getStoreAnalytics/getStoreAnalytics';

const getStoreAnalytics = async (dispatch, storeId) => {
  try {
    const response = await backend.get(`store_analytics?store_id=${storeId}`);
    dispatch(getStoreAnalyticsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getStoreAnalyticsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getStoreAnalytics;
