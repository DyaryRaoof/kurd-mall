import { postStoreFailure, postStoreLoading, postStoreSuccess } from '../redux/stores/stores';
import backend from './backend';

const postStore = async (dispatch, store) => {
  const userId = JSON.parse(localStorage.getItem('user')).id;
  try {
    dispatch(postStoreLoading());
    const response = await backend.post(`users/${userId}/stores`, store);
    dispatch(postStoreSuccess(response.data));
  } catch (err) {
    dispatch(postStoreFailure(JSON.stringify(err.response.data)));
  }
};

export default postStore;
