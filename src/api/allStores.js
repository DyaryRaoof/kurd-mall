import backend from './backend';
import { gettAllStoreLoading, getAllStoreSuccess, getAllStoreFailure } from '../redux/allStores/allStores';

const getAllStores = async (dispatch, subcategoryId, page) => {
  try {
    dispatch(gettAllStoreLoading());
    const response = await backend.get(`stores/subcategory_stores?subcategory_id=${subcategoryId}&page=${page}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getAllStoreSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getAllStoreFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getAllStores;
