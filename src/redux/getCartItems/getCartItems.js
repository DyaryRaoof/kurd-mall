const GET_CART_ITEMS_SUCCESS = 'kurd-mall/getCartItems/GET_CART_ITEMS_SUCCESS';
const GET_CART_ITEMS_FAILURE = 'kurd-mall/getCartItems/GET_CART_ITEMS_FAILURE';
const GET_CART_ITEMS_LOADING = 'kurd-mall/getCartItems/GET_CART_ITEMS_LOADING';
const RMOVE_CART_ITEM_SUCCESS = 'kurd-mall/getCartItems/RMOVE_CART_ITEM_SUCCESS';
const RMOVE_CART_ITEM_FAILURE = 'kurd-mall/getCartItems/RMOVE_CART_ITEM_FAILURE';
const RMOVE_CART_ITEM_LOADING = 'kurd-mall/getCartItems/RMOVE_CART_ITEM_LOADING';

const initialState = {
  items: [], isLoading: false, error: null, removeError: null, removeIsLoading: false,
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

export const removeCartItemSuccess = () => ({
  type: RMOVE_CART_ITEM_SUCCESS,
});

export const removeCartItemFailure = (payload) => ({
  type: RMOVE_CART_ITEM_FAILURE,
  payload,
});

export const removeCartItemLoading = () => ({
  type: RMOVE_CART_ITEM_LOADING,
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
    case RMOVE_CART_ITEM_SUCCESS:
      return { ...state, isLoading: false };
    case RMOVE_CART_ITEM_FAILURE:
      return { ...state, isLoading: false };
    case RMOVE_CART_ITEM_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default getCartItemsReducer;
