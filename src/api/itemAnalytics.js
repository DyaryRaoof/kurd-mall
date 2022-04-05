import backend from './backend';

const postItemView = async (itemId, itemName, storeId) => {
  try {
    const response = await backend.post(`item_analytics/views?item_id=${itemId}&item_name=${itemName}&store_id=${storeId}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export default postItemView;
