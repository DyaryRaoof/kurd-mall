import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../Shared/Comment';
import postComment from '../../api/itemComments';
import getDetailComments from '../../api/detailComments';
import Paginator from '../Shared/Paginator';

const Comments = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const pageCommments = useSelector((state) => state.detailCommentsReducer.comments || []);
  const [comments, setComments] = useState(pageCommments);
  const { itemId } = location.state;
  const [commentText, setCommentText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(async () => {
    await getDetailComments(dispatch, itemId, 1);
  }, []);

  const handleComment = () => {
    const comment = {
      item_id: itemId,
      user_id: JSON.parse(localStorage.getItem('user')).id,
      user_image: JSON.parse(localStorage.getItem('user')).image_urls[0],
      user_name: JSON.parse(localStorage.getItem('user')).name,
      description: commentText,
      created_at: Date.now(),
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
      {[...comments, ...pageCommments].map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {(pageCommments.length > 29 || (pageCommments.length === 0 && currentPage !== 1)) && (
        <Paginator
          wasLastpage={pageCommments.length === 0}
          onChange={(page) => {
            getDetailComments(dispatch, itemId, page);
            setCurrentPage(page);
          }}
        />
      )}
    </main>
  );
};

export default Comments;
