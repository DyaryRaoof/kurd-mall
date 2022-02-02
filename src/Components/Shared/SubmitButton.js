import PropTypes from 'prop-types';
import MaterialIcon from './MateriaIcon';

const SubmitButton = ({ name }) => (
  <div className="text-end">
    <div className="d-flex align-items-center justify-content-end">
      <span className="display-4 mx-2"><strong>{name}</strong></span>
      <button type="submit" className="orange-bg white-text d-flex justify-content-center p-2 my-3 radius-100 no-border text-center w-25 align-bottom">
        <MaterialIcon text="east" />
      </button>
    </div>
  </div>
);

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubmitButton;
