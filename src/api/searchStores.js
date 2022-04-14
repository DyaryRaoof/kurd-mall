import backend from './backend';
import { getSearchStoresLoading, getSearchStoresSuccess, getSearchStoresFailure } from '../redux/searchStores/searchStores';

const getSearchStores = async (
  dispatch,
  name,
  page,
) => {
  try {
    dispatch(getSearchStoresLoading());
    const response = await backend
      .get(`stores/search?name=${name}&page=${page}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getSearchStoresSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getSearchStoresFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getSearchStores;
