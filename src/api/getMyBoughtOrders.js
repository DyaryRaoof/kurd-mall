import backend from './backend';
import { getMyBoughtOrdersLoading, getMyBoughtOrdersSuccess, getMyBoughtOrdersFailure } from '../redux/getMyBoughtOrders/getMyBoughtOrders';

const getMyBoughtOrders = async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    dispatch(getMyBoughtOrdersLoading());
    const response = await backend.get(`orders/bought_orders?user_id=${user.id}`);
    dispatch(getMyBoughtOrdersSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getMyBoughtOrdersFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getMyBoughtOrders;
