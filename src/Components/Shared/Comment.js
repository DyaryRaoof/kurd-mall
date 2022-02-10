import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="d-flex p-2 m-2">
    <img className="rounded-circle commenter-image me-2" src={comment.user.image} alt="comment" />
    <div className="comments-text gray-background rounded p-3">
      <div className="comments-name">
        <span>John Doe</span>
        <span className="comments-date">
          {comment.description}
          {comment.date}
        </span>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Comment;
