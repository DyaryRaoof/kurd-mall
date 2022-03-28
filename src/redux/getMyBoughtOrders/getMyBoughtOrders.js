const GET_MY_BOUGHT_ORDERS_SUCCESS = 'kurd-mall/getMyBoughtOrders/GET_MY_BOUGHT_ORDERS_SUCCESS';
const GET_MY_BOUGHT_ORDERS_FAILURE = 'kurd-mall/getMyBoughtOrders/GET_MY_BOUGHT_ORDERS_FAILURE';
const GET_MY_BOUGHT_ORDERS_LOADING = 'kurd-mall/getMyBoughtOrders/GET_MY_BOUGHT_ORDERS_LOADING';

const initialState = {
  orders: [], isLoading: false, error: null,
};

export const getMyBoughtOrdersSuccess = (payload) => ({
  type: GET_MY_BOUGHT_ORDERS_SUCCESS,
  payload,
});

export const getMyBoughtOrdersFailure = (payload) => ({
  type: GET_MY_BOUGHT_ORDERS_FAILURE,
  payload,
});

export const getMyBoughtOrdersLoading = () => ({
  type: GET_MY_BOUGHT_ORDERS_LOADING,
});

const getMyBoughtOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_BOUGHT_ORDERS_SUCCESS:
      return {
        ...state, orders: action.payload, isLoading: false, error: null,
      };

    case GET_MY_BOUGHT_ORDERS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_MY_BOUGHT_ORDERS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default getMyBoughtOrdersReducer;
