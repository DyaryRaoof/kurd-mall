import { fetchCitiesFailure, fetchCitiesLoading, fetchCitiesSuccess } from '../redux/cities/cities';
import backend from './backend';

const fetchCities = async (dispatch) => {
  try {
    dispatch(fetchCitiesLoading());
    const response = await backend.get('cities');
    localStorage.setItem('cities', JSON.stringify(response.data));
    dispatch(fetchCitiesSuccess(response.data));
  } catch (err) {
    dispatch(fetchCitiesFailure(JSON.stringify(err.response.data)));
  }
};

export default fetchCities;
