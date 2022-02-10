import PropTypes from 'prop-types';
import MaterialIcon from './MateriaIcon';
import './RoundOrangeIconButton.css';

const RoundOrangeIconButton = ({ iconName, buttonText }) => (
  <div className="rounded-pill orange-bg width-200px d-flex justify-content-center align-items-center white-text p-3">
    <MaterialIcon text={iconName} isWhite />
    <span className="ms-2">{buttonText}</span>
  </div>
);

RoundOrangeIconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default RoundOrangeIconButton;
