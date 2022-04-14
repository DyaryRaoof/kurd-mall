import { postCommentFailure, postCommentLoading, postCommentSuccess } from '../redux/comments/comments';
import backend from './backend';

const postComment = async (dispatch, itemId, description) => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    dispatch(postCommentLoading());
    const comment = {
      item_id: itemId,
      user_id: user.id,
      user_image: user.image_urls[0],
      user_name: user.name,
      description,
    };
    const response = await backend.post('comments', comment);
    dispatch(postCommentSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(postCommentFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default postComment;
