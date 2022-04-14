const GET_MY_ITEMS_SUCCESS = 'kurd-mall/myItems/GET_MY_ITEMS_SUCCESS';
const GET_MY_ITEMS_FAILURE = 'kurd-mall/myItems/GET_MY_ITEMS_FAILURE';
const GET_MY_ITEMS_LOADING = 'kurd-mall/myItems/GET_MY_ITEMS_LOADING';

const initialState = { items: [], isLoading: false, error: null };

export const getMyItemsSuccess = (payload) => ({
  type: GET_MY_ITEMS_SUCCESS,
  payload,
});

export const getMyItemsFailure = (payload) => ({
  type: GET_MY_ITEMS_FAILURE,
  payload,
});

export const getMyItemsLoading = () => ({
  type: GET_MY_ITEMS_LOADING,
});

const myItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_ITEMS_SUCCESS:
      return {
        ...state, items: action.payload, isLoading: false, error: null,
      };

    case GET_MY_ITEMS_FAILURE:
      return { ...state, errors: action.payload, isLoading: false };
    case GET_MY_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default myItemsReducer;
