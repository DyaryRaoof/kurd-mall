import PropTypes from 'prop-types';
import './MaterialIcon.css';

const MaterialIcon = ({
  orange, text, isLarge, isWhite,
}) => (
  <span className={`material-icons ${orange ? 'orange' : ''} ${isLarge ? 'large-material-icon' : ''} ${isWhite ? 'white-text' : ''}`}>
    {text}
  </span>
);

MaterialIcon.propTypes = {
  orange: PropTypes.bool,
  text: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
  isWhite: PropTypes.bool,
};

MaterialIcon.defaultProps = {
  isLarge: false,
  isWhite: false,
  orange: true,
};

export default MaterialIcon;
