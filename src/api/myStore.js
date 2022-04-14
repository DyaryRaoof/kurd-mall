import backend from './backend';
import { getMyStoreLoading, getMyStoreSuccess, getMyStoreFailure } from '../redux/myStore/myStores';

const getMyStore = async (dispatch, id) => {
  try {
    dispatch(getMyStoreLoading());
    const response = await backend.get(`stores/my_store?user_id=${id}`);
    dispatch(getMyStoreSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getMyStoreFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getMyStore;
