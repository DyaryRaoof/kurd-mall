import backend from './backend';

const postStoreView = async (storeId, storeName) => {
  try {
    const response = await backend.post(`store_analytics/views?store_id=${storeId}&store_name=${storeName}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export default postStoreView;
