const GET_ALL_ORDERS_SUCCESS = 'kurd-mall/getAllOrders/GET_ALL_ORDERS_SUCCESS';
const GET_ALL_ORDERS_FAILURE = 'kurd-mall/getAllOrders/GET_ALL_ORDERS_FAILURE';

const initialState = {
  orders: [], error: null,
};

export const getAllOrdersSuccess = (payload) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload,
});

export const getAllOrdersFailure = (payload) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload,
});

const allOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state, orders: action.payload, isLoading: false, error: null,
      };

    case GET_ALL_ORDERS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default allOrdersReducer;
