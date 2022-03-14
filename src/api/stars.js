import { postStarFailure, postStarLoading, postStarSuccess } from '../redux/stars/stars';
import backend from './backend';

const postStar = async (dispatch, item, number) => {
  const userId = JSON.parse(localStorage.getItem('user')).id;
  try {
    dispatch(postStarLoading());
    const star = { item_id: item.id, user_id: userId, number };
    const response = await backend.post('stars', star);
    dispatch(postStarSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postStarFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postStar;
