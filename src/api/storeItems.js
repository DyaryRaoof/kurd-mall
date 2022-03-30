import backend from './backend';
import { getStoreItemsSuccess, getStoreItemsFailure } from '../redux/storeItems/storeItems';

const getStoreItems = async (dispatch, storeId, page) => {
  try {
    const response = await backend.get(`items/store_items?store_id=${storeId}&page=${page}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getStoreItemsSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getStoreItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getStoreItems;
