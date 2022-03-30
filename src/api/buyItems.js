import backend from './backend';
import { postBuyItemsLoading, postBuyItemsSuccess, postBuyItemsFailure } from '../redux/buyItems/buyItems';

const postBuyItems = async (dispatch, itemIds, position) => {
  try {
    dispatch(postBuyItemsLoading());
    const response = await backend
      .post(`orders/set_ordered?order_ids=${JSON.stringify(itemIds)}&location_lat=${position.lat}&location_long=${position.long}`, {});
    dispatch(postBuyItemsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postBuyItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postBuyItems;
