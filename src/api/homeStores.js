import backend from './backend';
import { gettHomeStoresLoading, getHomeStoresSuccess, getHomeStoresFailure } from '../redux/homeStores/homeStores';

const getHomeStores = async (dispatch, subcategoryIds) => {
  try {
    dispatch(gettHomeStoresLoading());
    const response = await backend.get(`stores/home_index?subcategory_ids=${JSON.stringify(subcategoryIds)}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getHomeStoresSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getHomeStoresFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getHomeStores;
