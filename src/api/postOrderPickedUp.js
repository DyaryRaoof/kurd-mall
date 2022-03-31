import backend from './backend';
import { postOrderPickedUpSuccess, postOrderPickedUpFailure } from '../redux/allOrders/allOrders';

const postOrderPickedUp = async (dispatch, id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await backend.get(`orders/picked_up?id=${id}&driver_id=${user.id}&driver_phone=${user.phone}`);
    dispatch(postOrderPickedUpSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postOrderPickedUpFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postOrderPickedUp;
