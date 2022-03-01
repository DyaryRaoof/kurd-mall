import { fetchCategoriesFailure, fetchCategoriesLoading, fetchCategoriesSuccess } from '../redux/categories/categories';
import backend from './backend';

const fetchCategories = async (dispatch) => {
  try {
    dispatch(fetchCategoriesLoading());
    const response = await backend.get('categories');
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    dispatch(fetchCategoriesFailure(JSON.stringify(err.response.data)));
  }
};

export default fetchCategories;
