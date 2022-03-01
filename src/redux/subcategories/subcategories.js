const FECH_SUBCATEGORIES_SUCCESS = 'kurd-mall/subcategories/FECH_SUBCATEGORIES_SUCCESS';
const FECH_SUBCATEGORIES_FAILURE = 'kurd-mall/subcategories/FECH_SUBCATEGORIES_FAILURE';
const FECH_SUBCATEGORIES_LOADING = 'kurd-mall/subcategories/FECH_SUBCATEGORIES_LOADING';

const initialState = { subcategories: [], isLoading: false, error: null };

export const fetchSubcategoriesSuccess = (payload) => ({
  type: FECH_SUBCATEGORIES_SUCCESS,
  payload,
});

export const fetchSubcategoriesFailure = (payload) => ({
  type: FECH_SUBCATEGORIES_FAILURE,
  payload,
});

export const fetchSubcategoriesLoading = () => ({
  type: FECH_SUBCATEGORIES_LOADING,
});

const subcategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECH_SUBCATEGORIES_SUCCESS:
      return {
        ...state, subcategories: action.payload, isLoading: true, error: null,
      };
    case FECH_SUBCATEGORIES_FAILURE:
      return { ...state, errors: action.payload };
    case FECH_SUBCATEGORIES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default subcategoriesReducer;
