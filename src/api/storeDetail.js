import backend from './backend';
import { getStoreDetailLoading, getStoreDetailSuccess, getStoreDetailFailure } from '../redux/storeDetail/storeDetail';

const getStoreDetail = async (dispatch, storeId) => {
  try {
    dispatch(getStoreDetailLoading());
    const response = await backend.get(`stores/${storeId}?`);
    dispatch(getStoreDetailSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getStoreDetailFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getStoreDetail;
