import { postStoreFailure, postStoreLoading, postStoreSuccess } from '../redux/stores/stores';
import backend from './backend';

const postStore = async (dispatch, store, images) => {
  const data = new FormData();
  [...images].forEach((image) => {
    data.append('store[images][]', image, image.name);
  });
  const userId = JSON.parse(localStorage.getItem('user')).id;

  data.append('store[name]', store.name);
  data.append('store[description]', store.description);
  data.append('store[address]', store.address);
  data.append('store[facebook]', store.facebook);
  data.append('store[instagram]', store.instagram);
  data.append('store[category_id]', store.category_id);
  data.append('store[subcategory_id]', store.subcategory_id);
  data.append('store[city_id]', store.city_id);
  data.append('store[user_id]', userId);

  try {
    dispatch(postStoreLoading());
    const response = await backend.post(`users/${userId}/stores`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
    dispatch(postStoreSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postStoreFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postStore;
