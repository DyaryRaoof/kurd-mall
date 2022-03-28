const GET_ALL_ITEMS_SUCCESS = 'kurd-mall/allItems/GET_ALL_ITEMS_SUCCESS';
const GET_ALL_ITEMS_FAILURE = 'kurd-mall/allItems/GET_ALL_ITEMS_FAILURE';
const GET_ALL_ITEMS_LOADING = 'kurd-mall/allItems/GET_ALL_ITEMS_LOADING';

const initialState = {
  items: [], allItemsFromHome: [], isLoading: false, error: null,
};

export const getAllItemSuccess = (payload) => ({
  type: GET_ALL_ITEMS_SUCCESS,
  payload,
});

export const getAllItemFailure = (payload) => ({
  type: GET_ALL_ITEMS_FAILURE,
  payload,
});

export const gettAllItemLoading = () => ({
  type: GET_ALL_ITEMS_LOADING,
});

export const getAllItemFromHomeSuccess = (payload) => ({
  type: GET_ALL_ITEMS_SUCCESS,
  payload,
});

export const getAllItemFromHomeFailure = (payload) => ({
  type: GET_ALL_ITEMS_FAILURE,
  payload,
});

const allItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS_SUCCESS:
      return {
        ...state, items: action.payload, isLoading: false, error: null,
      };

    case GET_ALL_ITEMS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_ALL_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default allItemsReducer;
