import { postItemFailure, postItemLoading, postItemSuccess } from '../redux/items/items';
import backend from './backend';

const postItem = async (dispatch, item, images) => {
  const data = new FormData();
  [...images].forEach((image) => {
    data.append('item[images][]', image, image.name);
  });
  const userId = JSON.parse(localStorage.getItem('user')).id;
  data.append('item[store_id]', item.store.id);
  data.append('item[user_id]', item.user_id);
  data.append('item[name]', item.name);
  data.append('item[description]', item.description);
  data.append('item[price]', item.price);
  data.append('item[cost]', item.cost);
  data.append('item[currency]', item.currency);
  data.append('item[category_id]', item.store.category_id);
  data.append('item[subcategory_id]', item.store.subcategory_id);
  data.append('item[city_id]', item.store.city_id);
  data.append('item[user_id]', userId);
  data.append('item[shipping_kg]', item.shipping_kg);
  data.append('item[quantity]', item.quantity);
  data.append('item[store_name]', item.store_name);
  data.append('item[store_phone]', item.store_phone);

  item.variants.forEach((variant) => {
    data.append('item[variants][]', JSON.stringify(variant));
  });
  item.tags.forEach((tag) => data.append('item[tags][]', JSON.stringify({ name: tag })));

  try {
    dispatch(postItemLoading());
    const response = await backend.post(`users/${userId}/stores/${item.store.id}/items`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
    dispatch(postItemSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postItem;
