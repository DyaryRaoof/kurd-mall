import backend from './backend';
import { getAllOrdersSuccess, getAllOrdersFailure } from '../redux/allOrders/allOrders';

const getAllOrders = async (dispatch, page) => {
  try {
    const response = await backend.get(`orders/all_orders?page=${page}`);
    dispatch(getAllOrdersSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getAllOrdersFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getAllOrders;
