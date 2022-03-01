import { fetchSubcategoriesFailure, fetchSubcategoriesLoading, fetchSubcategoriesSuccess } from '../redux/subcategories/subcategories';
import backend from './backend';

const fetchSubcategories = async (dispatch, index) => {
  try {
    dispatch(fetchSubcategoriesLoading());
    const response = await backend.get(`categories/${index}/subcategories`);
    dispatch(fetchSubcategoriesSuccess(response.data));
  } catch (err) {
    dispatch(fetchSubcategoriesFailure(JSON.stringify(err.response.data)));
  }
};

export default fetchSubcategories;
