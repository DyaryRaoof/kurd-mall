import { fetchCategoriesFailure, fetchCategoriesLoading, fetchCategoriesSuccess } from '../redux/categories/categories';
import backend from './backend';

const fetchCategories = async (dispatch) => {
  try {
    dispatch(fetchCategoriesLoading());
    const response = await backend.get('categories');
    localStorage.setItem('categories', JSON.stringify(response.data));
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (err) {
    dispatch(fetchCategoriesFailure(JSON.stringify(err.response.data)));
  }
};

export default fetchCategories;
