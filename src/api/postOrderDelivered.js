import backend from './backend';
import { postOrderDeliveredSuccess, postOrderDeliveredFailure } from '../redux/allOrders/allOrders';

const postOrderDelivered = async (dispatch, id) => {
  try {
    const response = await backend.get(`orders/delivered?id=${id}`);
    dispatch(postOrderDeliveredSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postOrderDeliveredFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postOrderDelivered;
