import backend from './backend';
import { getDriverOrdersSuccess, getDriverOrdersFailure } from '../redux/driverOrders/driverOrders';

const getDriverOrders = async (dispatch, page) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await backend.get(`orders/driver_orders?driver_id=${user.id}&page=${page}`);
    dispatch(getDriverOrdersSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getDriverOrdersFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getDriverOrders;
