const FECH_CITIES_SUCCESS = 'kurd-mall/cities/FECH_CITIES_SUCCESS';
const FECH_CITIES_FAILURE = 'kurd-mall/cities/FECH_CITIES_FAILURE';
const FECH_CITIES_LOADING = 'kurd-mall/cities/FECH_CITIES_LOADING';

const initialState = { cities: [], isLoading: false, error: null };

export const fetchCitiesSuccess = (payload) => ({
  type: FECH_CITIES_SUCCESS,
  payload,
});

export const fetchCitiesFailure = (payload) => ({
  type: FECH_CITIES_FAILURE,
  payload,
});

export const fetchCitiesLoading = () => ({
  type: FECH_CITIES_LOADING,
});

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECH_CITIES_SUCCESS:
      return {
        ...state, cities: action.payload, isLoading: true, error: null,
      };
    case FECH_CITIES_FAILURE:
      return { ...state, errors: action.payload };
    case FECH_CITIES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default citiesReducer;
