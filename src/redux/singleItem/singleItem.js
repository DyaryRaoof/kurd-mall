const GET_SINGLE_ITEM_SUCCESS = 'kurd-mall/singleItem/GET_SINGLE_ITEM_SUCCESS';
const GET_SINGLE_ITEM_FAILURE = 'kurd-mall/singleItem/GET_SINGLE_ITEM_FAILURE';

const initialState = {
  item: null, error: null,
};

export const getSingleItemSuccess = (payload) => ({
  type: GET_SINGLE_ITEM_SUCCESS,
  payload,
});

export const getSingleItemFailure = (payload) => ({
  type: GET_SINGLE_ITEM_FAILURE,
  payload,
});

const singleItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_ITEM_SUCCESS:
      return {
        ...state, item: action.payload, error: null,
      };

    case GET_SINGLE_ITEM_FAILURE:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default singleItemReducer;
