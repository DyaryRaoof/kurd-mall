import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import getJavascriptDateFromTimeStamp from './methods/getJavascriptDateFromTimeStamp';

import './Comment.css';

const Comment = ({ comment }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex p-2 m-2 my-2 flex-column">
      <div className="d-flex align-items-center">
        <img className="rounded-circle commenter-image my-2" src={comment.user_image} alt="comment" />
        <span className="text-bold ms-2">{comment.user_name}</span>
      </div>
      <div className="comments-text gray-background rounded p-3">
        <div className="comments-name">
          <span className="comments-date">
            {comment.description}
            <span className="orange mx-3">
              {t('at')}
              {getJavascriptDateFromTimeStamp(comment.created_at)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
};

export default Comment;
