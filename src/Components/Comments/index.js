import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import comment from '../mock-data/comment';
import makeid from '../Shared/methods/makeid';
import Comment from '../Shared/Comment';
import postComment from '../../api/itemComments';

const Comments = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const [comments, setComments] = useState(location.state.comments || []);
  const { itemId } = location.state;
  const [commentText, setCommentText] = useState('');

  const handleComment = () => {
    const comment = {
      item_id: itemId,
      user_id: JSON.parse(localStorage.getItem('user')).id,
      user_image: JSON.parse(localStorage.getItem('user')).image_urls[0],
      user_name: JSON.parse(localStorage.getItem('user')).name,
      description: commentText,
      date: Date.now(),
    };
    setComments([...comments, comment]);
    setCommentText('');
    postComment(dispatch, itemId, commentText);
  };

  return (
    <main className="container">

      <h3 className="orange m-2">{t('comments')}</h3>
      <div className="mx-4 mt-5">
        <input
          type="text"
          className="form-control p-3"
          value={commentText}
          onChange={(e) => { setCommentText(e.target.value); }}
          placeholder={t('writeComment')}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleComment();
            }
          }}
        />
      </div>
      {comments.map((comment) => (
        <Comment key={makeid(10)} comment={comment} />
      ))}
    </main>
  );
};

export default Comments;
