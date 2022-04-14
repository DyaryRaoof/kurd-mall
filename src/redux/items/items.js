const POST_ITEM_SUCCESS = 'kurd-mall/items/POST_ITEMS_SUCCESS';
const POST_ITEM_FAILURE = 'kurd-mall/items/POST_ITEMS_FAILURE';
const POST_ITEM_LOADING = 'kurd-mall/items/POST_ITEMS_LOADING';

const initialState = { items: [], isLoading: false, error: null };

export const postItemSuccess = (payload) => ({
  type: POST_ITEM_SUCCESS,
  payload,
});

export const postItemFailure = (payload) => ({
  type: POST_ITEM_FAILURE,
  payload,
});

export const postItemLoading = () => ({
  type: POST_ITEM_LOADING,
});

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ITEM_SUCCESS:
      return {
        ...state, item: action.payload, isLoading: true, error: null,
      };
    case POST_ITEM_FAILURE:
      return { ...state, errors: action.payload };
    case POST_ITEM_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default itemsReducer;
