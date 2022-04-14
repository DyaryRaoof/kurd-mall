import backend from './backend';
import { getMyItemsLoading, getMyItemsSuccess, getMyItemsFailure } from '../redux/myItems/myItems';

const getMyItems = async (dispatch, id, page) => {
  try {
    dispatch(getMyItemsLoading());
    const response = await backend.get(`items/my_items?user_id=${id}&page=${page}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getMyItemsSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getMyItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getMyItems;
