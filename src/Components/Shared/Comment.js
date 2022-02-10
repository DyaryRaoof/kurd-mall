import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="d-flex p-2 m-2 my-2 flex-column">
    <div className="d-flex align-items-center">
      <img className="rounded-circle commenter-image my-2" src={comment.user.image} alt="comment" />
      <span className="text-bold ms-2">John Doe</span>
    </div>
    <div className="comments-text gray-background rounded p-3">
      <div className="comments-name">
        <span className="comments-date">
          {comment.description}
          <span className="orange">
            At
            {comment.date}
          </span>
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
