import backend from './backend';
import { gettAllItemLoading, getAllItemSuccess, getAllItemFailure } from '../redux/allItems/allItems';

const getAllItems = async (dispatch, subcategoryId, page) => {
  try {
    dispatch(gettAllItemLoading());
    const response = await backend.get(`items/subcategory_items?subcategory_id=${subcategoryId}&page=${page}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getAllItemSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getAllItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getAllItems;
