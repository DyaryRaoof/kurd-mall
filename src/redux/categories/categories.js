const FECH_CATEGORIES_SUCCESS = 'kurd-mall/categories/FECH_CATEGORIES_SUCCESS';
const FECH_CATEGORIES_FAILURE = 'kurd-mall/categories/FECH_CATEGORIES_FAILURE';
const FECH_CATEGORIES_LOADING = 'kurd-mall/categories/FECH_CATEGORIES_LOADING';

const initialState = { categories: [], isLoading: false, error: null };

export const fetchCategoriesSuccess = (payload) => ({
  type: FECH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (payload) => ({
  type: FECH_CATEGORIES_FAILURE,
  payload,
});

export const fetchCategoriesLoading = () => ({
  type: FECH_CATEGORIES_LOADING,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECH_CATEGORIES_SUCCESS:
      return {
        ...state, categories: action.payload, isLoading: true, error: null,
      };
    case FECH_CATEGORIES_FAILURE:
      return { ...state, errors: action.payload };
    case FECH_CATEGORIES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default categoriesReducer;
