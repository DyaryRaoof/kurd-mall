import backend from './backend';
import { postAddItemToCartLoading, postAddItemToCartSuccess, postAddItemToCartFailure } from '../redux/addItemToCart/addItemToCart';

const postAddItemToCart = async (dispatch, data) => {
  try {
    dispatch(postAddItemToCartLoading());
    const response = await backend.post('orders', data);
    dispatch(postAddItemToCartSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postAddItemToCartFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postAddItemToCart;
