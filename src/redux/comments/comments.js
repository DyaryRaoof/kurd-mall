const POST_COMMENT_SUCCESS = 'kurd-mall/comments/POST_COMMENT_SUCCESS';
const POST_COMMENT_FAILURE = 'kurd-mall/comments/POST_COMMENT_FAILURE';
const POST_COMMENT_LOADING = 'kurd-mall/comments/POST_COMMENT_LOADING';

const initialState = { isLoading: false, error: null };

export const postCommentSuccess = (payload) => ({
  type: POST_COMMENT_SUCCESS,
  payload,
});

export const postCommentFailure = (payload) => ({
  type: POST_COMMENT_FAILURE,
  payload,
});

export const postCommentLoading = () => ({
  type: POST_COMMENT_LOADING,
});

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_SUCCESS:
      return {
        isLoading: false, error: null,
      };
    case POST_COMMENT_FAILURE:
      return { ...state, errors: action.payload };
    case POST_COMMENT_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default commentsReducer;
