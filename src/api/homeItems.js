import backend from './backend';
import { gettHomeItemLoading, postHomeItemSuccess, postHomeItemFailure } from '../redux/homeItems/homeItems';

const getHomeItems = async (dispatch, subcategoryIds) => {
  try {
    dispatch(gettHomeItemLoading());
    const response = await backend.get(`items/home-index?subcategory_ids=${JSON.stringify(subcategoryIds)}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(postHomeItemSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(postHomeItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getHomeItems;
