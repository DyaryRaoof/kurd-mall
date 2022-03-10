import backend from './backend';
import { gettHomeItemLoading, getHomeItemSuccess, getHomeItemFailure } from '../redux/homeItems/homeItems';

const getHomeItems = async (dispatch, subcategoryIds, replaceItems) => {
  try {
    dispatch(gettHomeItemLoading());
    const response = await backend.get(`items/home_index?subcategory_ids=${JSON.stringify(subcategoryIds)}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getHomeItemSuccess({ items: pureData, replaceItems }));
    return response;
  } catch (err) {
    dispatch(getHomeItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getHomeItems;
