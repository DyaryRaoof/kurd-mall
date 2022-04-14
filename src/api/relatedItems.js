import backend from './backend';
import { gettRelatedItemsLoading, getRelatedItemsSuccess, getRelatedItemsFailure } from '../redux/relatedItems/relatedItems';

const getRelatedItems = async (dispatch, item) => {
  try {
    dispatch(gettRelatedItemsLoading());
    const response = await backend.get(`items/related_items?name=${item.name}&id=${item.id}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getRelatedItemsSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getRelatedItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getRelatedItems;
