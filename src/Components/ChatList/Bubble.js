import PropTypes from 'prop-types';

const Bubble = ({ chatWith, onPress }) => {
  const {
    name, lastMessage, time, image, withUserId,
  } = chatWith;
  return (
    <button type="button" className="icon-button w-100" onClick={() => onPress(withUserId)}>
      <div>
        <div className="rounded-pill p-2 m-2 me-5 gray-background">
          <div className="d-flex justify-content-between">
            <div className="avatar-container">
              <img className="rounded-circle chat-avatar" src={image} alt="avatar" />
            </div>
            <div className="d-flex align-items-center">
              <div className="me-1 orange">{name}</div>
              <div>
                {`${lastMessage.slice(0, 15)}...`}
              </div>
              <div className="ms-1">{time}</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

Bubble.propTypes = {
  chatWith: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    withUserId: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Bubble;
