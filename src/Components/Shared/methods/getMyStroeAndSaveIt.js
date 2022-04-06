import getMyStore from '../../../api/myStore';

const getMyStoreAndSaveIt = async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    const response = await getMyStore(dispatch, user.id);
    localStorage.setItem('store', JSON.stringify(response.data));
  }
};

export default getMyStoreAndSaveIt;
