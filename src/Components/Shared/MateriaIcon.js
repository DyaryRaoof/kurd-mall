import PropTypes from 'prop-types';
import './MaterialIcon.css';

const MaterialIcon = ({
  orange, text, isLarge,
}) => (
  <span className={`material-icons ${orange ? 'orange' : ''} ${isLarge ? 'large-material-icon' : ''}`}>
    {text}
  </span>
);

MaterialIcon.propTypes = {
  orange: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
};

MaterialIcon.defaultProps = {
  isLarge: false,
};

export default MaterialIcon;
