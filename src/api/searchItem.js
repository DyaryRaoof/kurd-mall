import backend from './backend';
import { getSearchItemsLoading, getSearchItemsSuccess, getSearchItemsFailure } from '../redux/searchItems/searchItems';

const getSearchItems = async (dispatch,
  name,
  currency,
  priceFrom,
  priceTo,
  stars,
  ascending,
  page) => {
  try {
    dispatch(getSearchItemsLoading());
    const response = await backend
      .get(`items/search?name=${name}&currency=${currency}&price_from=${priceFrom}&price_to=${priceTo}&page=${page}&ascending=${ascending}&stars=${stars}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getSearchItemsSuccess(pureData));
    return response;
  } catch (err) {
    dispatch(getSearchItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getSearchItems;
