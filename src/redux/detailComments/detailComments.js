const GET_DETAIL_COMMENTS_SUCCESS = 'kurd-mall/detailComments/GET_DETAIL_COMMENTS_SUCCESS';
const GET_DETAIL_COMMENTS_FAILURE = 'kurd-mall/detailComments/GET_DETAIL_COMMENTS_FAILURE';
const GET_DETAIL_COMMENTS_LOADING = 'kurd-mall/detailComments/GET_DETAIL_COMMENTS_LOADING';

const initialState = { items: [], isLoading: false, error: null };

export const getDetailCommentsSuccess = (payload) => ({
  type: GET_DETAIL_COMMENTS_SUCCESS,
  payload,
});

export const getDetailCommentsFailure = (payload) => ({
  type: GET_DETAIL_COMMENTS_FAILURE,
  payload,
});

export const gettDetailCommentsLoading = () => ({
  type: GET_DETAIL_COMMENTS_LOADING,
});

const detailCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_COMMENTS_SUCCESS:
      return {
        ...state, comments: action.payload, isLoading: false, error: null,
      };
    case GET_DETAIL_COMMENTS_FAILURE:
      return { ...state, errors: action.payload };
    case GET_DETAIL_COMMENTS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default detailCommentsReducer;
