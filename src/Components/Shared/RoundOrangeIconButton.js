import PropTypes from 'prop-types';
import MaterialIcon from './MateriaIcon';
import './RoundOrangeIconButton.css';

const RoundOrangeIconButton = ({
  iconName, buttonText, width, padding, isIconPresent, onPressed,
}) => (
  <button className="icon-button" type="button" onClick={() => onPressed()}>
    <div
      className="rounded-pill
  orange-bg width-200px d-flex justify-content-center align-items-center white-text"
      style={{ width, padding }}
    >
      {isIconPresent ? <MaterialIcon text={iconName} isWhite /> : null}
      <span className="ms-2">{buttonText}</span>
    </div>
  </button>

);

RoundOrangeIconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.string,
  padding: PropTypes.string,
  isIconPresent: PropTypes.bool,
  onPressed: PropTypes.func,

};

RoundOrangeIconButton.defaultProps = {
  width: '200px',
  padding: '10px',
  isIconPresent: true,
  onPressed: () => { },
};

export default RoundOrangeIconButton;
