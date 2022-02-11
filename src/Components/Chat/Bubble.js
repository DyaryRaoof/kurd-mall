import PropTypes from 'prop-types';

const Bubble = ({ chat }) => {
  const currentUserId = 1;
  const {
    name, message, time, isRead, userId,
  } = chat;
  return (
    <div>
      {userId !== currentUserId
        ? (
          <div className="mx-2">
            {name}
          </div>
        ) : null}
      <div className={`rounded p-2 m-2 ${userId === currentUserId ? 'me-5 gray-background ' : 'orange-bg ms-5'}`}>
        <div className="d-flex justify-content-between">
          <div className="avatar-container">
            {userId !== currentUserId ? (<img className="rounded-circle chat-avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />) : null}
          </div>
          <div className="mt-2">
            {message}
          </div>
          <div>{time}</div>
        </div>

      </div>
      {isRead && userId === currentUserId ? <div className="text-end me-5">Read </div> : null}
    </div>
  );
};

Bubble.propTypes = {
  chat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Bubble;
