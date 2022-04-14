const GET_ALL_ORDERS_SUCCESS = 'kurd-mall/getAllOrders/GET_ALL_ORDERS_SUCCESS';
const GET_ALL_ORDERS_FAILURE = 'kurd-mall/getAllOrders/GET_ALL_ORDERS_FAILURE';
const POST_ORDER_PICKED_UP_SUCESS = 'kurd-mall/getAllOrders/POST_ORDER_PICKED_UP_SUCESS';
const POST_ORDER_PICKED_UP_FAILURE = 'kurd-mall/getAllOrders/POST_ORDER_PICKED_UP_FAILURE';
const POST_ORDER_DELIVERED_SUCESS = 'kurd-mall/getAllOrders/POST_ORDER_DELIVERED_SUCESS';
const POST_ORDER_DELIVERED_FAILURE = 'kurd-mall/getAllOrders/POST_ORDER_DELIVERED_FAILURE';

const initialState = {
  orders: [],
  error: null,
  pickedUpError: null,
  pickedUpMessage: null,
  deliveredMessage: null,
  deliveredError: null,
};

export const getAllOrdersSuccess = (payload) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload,
});

export const getAllOrdersFailure = (payload) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload,
});

export const postOrderPickedUpSuccess = (payload) => ({
  type: POST_ORDER_PICKED_UP_SUCESS,
  payload,
});

export const postOrderPickedUpFailure = (payload) => ({
  type: POST_ORDER_PICKED_UP_FAILURE,
  payload,
});

export const postOrderDeliveredSuccess = (payload) => ({
  type: POST_ORDER_DELIVERED_SUCESS,
  payload,
});

export const postOrderDeliveredFailure = (payload) => ({
  type: POST_ORDER_DELIVERED_FAILURE,
  payload,
});

const allOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state, orders: action.payload, error: null,
      };

    case GET_ALL_ORDERS_FAILURE:
      return { ...state, errors: action.payload };

    case POST_ORDER_PICKED_UP_SUCESS:
      return { ...state, pickedUpMessage: action.payload, pickedUpError: null };

    case POST_ORDER_PICKED_UP_FAILURE:
      return { ...state, pickedUpError: action.payload };

    case POST_ORDER_DELIVERED_SUCESS:
      return { ...state, deliveredMessage: action.payload, deliveredError: null };

    case POST_ORDER_DELIVERED_FAILURE:
      return { ...state, deliveredError: action.payload };

    default:
      return state;
  }
};

export default allOrdersReducer;
