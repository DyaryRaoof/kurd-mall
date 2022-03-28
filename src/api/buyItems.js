import backend from './backend';
import { postBuyItemsLoading, postBuyItemsSuccess, postBuyItemsFailure } from '../redux/buyItems/buyItems';

const postBuyItems = async (dispatch, itemIds) => {
  try {
    dispatch(postBuyItemsLoading());
    const response = await backend.post(`orders/set_ordered?order_ids=${JSON.stringify(itemIds)}`, {});
    dispatch(postBuyItemsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postBuyItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postBuyItems;
