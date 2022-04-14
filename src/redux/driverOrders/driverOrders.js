const GET_DRIVER_ORDERS_SUCCESS = 'kurd-mall/getDriverOrders/GET_DRIVER_ORDERS_SUCCESS';
const GET_DRIVER_ORDERS_FAILURE = 'kurd-mall/getDriverOrders/GET_DRIVER_ORDERS_FAILURE';

const initialState = {
  orders: [], error: null,
};

export const getDriverOrdersSuccess = (payload) => ({
  type: GET_DRIVER_ORDERS_SUCCESS,
  payload,
});

export const getDriverOrdersFailure = (payload) => ({
  type: GET_DRIVER_ORDERS_FAILURE,
  payload,
});

const driverOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVER_ORDERS_SUCCESS:
      return {
        ...state, orders: action.payload, isLoading: false, error: null,
      };

    case GET_DRIVER_ORDERS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default driverOrdersReducer;
