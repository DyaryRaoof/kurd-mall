const GET_CART_ITEMS_SUCCESS = 'kurd-mall/getCartItems/GET_CART_ITEMS_SUCCESS';
const GET_CART_ITEMS_FAILURE = 'kurd-mall/getCartItems/GET_CART_ITEMS_FAILURE';
const GET_CART_ITEMS_LOADING = 'kurd-mall/getCartItems/GET_CART_ITEMS_LOADING';

const initialState = {
  items: [], isLoading: false, error: null,
};

export const getCartItemsSuccess = (payload) => ({
  type: GET_CART_ITEMS_SUCCESS,
  payload,
});

export const getCartItemsFailure = (payload) => ({
  type: GET_CART_ITEMS_FAILURE,
  payload,
});

export const getCartItemsLoading = () => ({
  type: GET_CART_ITEMS_LOADING,
});

const getCartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state, items: action.payload, isLoading: false, error: null,
      };

    case GET_CART_ITEMS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_CART_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default getCartItemsReducer;
