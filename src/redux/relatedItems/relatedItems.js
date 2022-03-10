const GET_RELATED_ITEMS_SUCCESS = 'kurd-mall/relatedItems/GET_RELATED_ITEMS_SUCCESS';
const GET_RELATED_ITEMS_FAILURE = 'kurd-mall/relatedItems/GET_RELATED_ITEMS_FAILURE';
const GET_RELATED_ITEMS_LOADING = 'kurd-mall/relatedItems/GET_RELATED_ITEMS_LOADING';

const initialState = { items: [], isLoading: false, error: null };

export const getRelatedItemsSuccess = (payload) => ({
  type: GET_RELATED_ITEMS_SUCCESS,
  payload,
});

export const getRelatedItemsFailure = (payload) => ({
  type: GET_RELATED_ITEMS_FAILURE,
  payload,
});

export const gettRelatedItemsLoading = () => ({
  type: GET_RELATED_ITEMS_LOADING,
});

const relatedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RELATED_ITEMS_SUCCESS:
      return {
        ...state, items: action.payload, isLoading: true, error: null,
      };

    case GET_RELATED_ITEMS_FAILURE:
      return { ...state, errors: action.payload };
    case GET_RELATED_ITEMS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default relatedItemsReducer;
