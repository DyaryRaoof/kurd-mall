const POST_BUY_ITEMS_SUCCESS = 'kurd-mall/buyItems/POST_BUY_ITEMS_SUCCESS';
const POST_BUY_ITEMS_FAILURE = 'kurd-mall/buyItems/POST_BUY_ITEMS_FAILURE';
const POST_BUY_ITEMS_LOADING = 'kurd-mall/buyItems/POST_BUY_ITEMS_LOADING';

const initialState = {
  isLoading: false, error: null,
};

export const postBuyItemsSuccess = (payload) => ({
  type: POST_BUY_ITEMS_SUCCESS,
  payload,
});

export const postBuyItemsFailure = (payload) => ({
  type: POST_BUY_ITEMS_FAILURE,
  payload,
});

export const postBuyItemsLoading = () => ({
  type: POST_BUY_ITEMS_LOADING,
});

const buyItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BUY_ITEMS_SUCCESS:
      return {
        ...state, isLoading: false, error: null,
      };

    case POST_BUY_ITEMS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case POST_BUY_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default buyItemsReducer;
