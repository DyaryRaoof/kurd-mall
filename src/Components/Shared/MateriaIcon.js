import PropTypes from 'prop-types';

const MaterialIcon = ({
  orange, text,
}) => (
  <span className={`material-icons ${orange ? 'orange' : ''}`}>
    {text}
  </span>
);

MaterialIcon.propTypes = {
  orange: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default MaterialIcon;
