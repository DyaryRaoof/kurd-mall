const POST_ADD_ITEM_TO_CART_SUCCESS = 'kurd-mall/addItemToCart/POST_ADD_ITEM_TO_CART_SUCCESS';
const POST_ADD_ITEM_TO_CART_FAILURE = 'kurd-mall/addItemToCart/POST_ADD_ITEM_TO_CART_FAILURE';
const POST_ADD_ITEM_TO_CART_LOADING = 'kurd-mall/addItemToCart/POST_ADD_ITEM_TO_CART_LOADING';

const initialState = {
  cart: [], isLoading: false, error: null,
};

export const postAddItemToCartSuccess = (payload) => ({
  type: POST_ADD_ITEM_TO_CART_SUCCESS,
  payload,
});

export const postAddItemToCartFailure = (payload) => ({
  type: POST_ADD_ITEM_TO_CART_FAILURE,
  payload,
});

export const postAddItemToCartLoading = () => ({
  type: POST_ADD_ITEM_TO_CART_LOADING,
});

const allItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state, cart: action.payload, isLoading: false, error: null,
      };

    case POST_ADD_ITEM_TO_CART_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case POST_ADD_ITEM_TO_CART_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default allItemsReducer;
