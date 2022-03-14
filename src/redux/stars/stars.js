const POST_STAR_SUCCESS = 'kurd-mall/stars/POST_STAR_SUCCESS';
const POST_STAR_FAILURE = 'kurd-mall/stars/POST_STAR_FAILURE';
const POST_STAR_LOADING = 'kurd-mall/stars/POST_STAR_LOADING';

const initialState = { isLoading: false, error: null };

export const postStarSuccess = (payload) => ({
  type: POST_STAR_SUCCESS,
  payload,
});

export const postStarFailure = (payload) => ({
  type: POST_STAR_FAILURE,
  payload,
});

export const postStarLoading = () => ({
  type: POST_STAR_LOADING,
});

const starsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_STAR_SUCCESS:
      return {
        isLoading: false, error: null,
      };
    case POST_STAR_FAILURE:
      return { ...state, errors: action.payload };
    case POST_STAR_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default starsReducer;
