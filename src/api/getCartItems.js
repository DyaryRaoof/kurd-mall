import backend from './backend';
import { getCartItemsLoading, getCartItemsSuccess, getCartItemsFailure } from '../redux/getCartItems/getCartItems';

const getCartItems = async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    dispatch(getCartItemsLoading());
    const response = await backend.get(`orders/current_orders?user_id=${user.id}`);
    dispatch(getCartItemsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getCartItemsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getCartItems;
