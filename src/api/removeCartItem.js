import backend from './backend';
import { removeCartItemLoading, removeCartItemSuccess, removeCartItemFailure } from '../redux/getCartItems/getCartItems';

const removeCartItem = async (dispatch, id) => {
  try {
    dispatch(removeCartItemLoading());
    const response = await backend.delete(`orders?id=${id}`);
    dispatch(removeCartItemSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(removeCartItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default removeCartItem;
