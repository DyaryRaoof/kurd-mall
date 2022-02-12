import { useState } from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ submitted, setParentValue: onChange, text }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value={checked} id="flexCheckDefault" onChange={(e) => { onChange(e.target.value); setChecked(e.target.value); }} />
      <span className="form-check-label" htmlFor="flexCheckDefault">
        {text}
      </span>
      <p className="text-danger">{submitted && !checked && 'This field is required'}</p>
    </div>
  );
};

CheckBox.propTypes = {
  submitted: PropTypes.bool.isRequired,
  setParentValue: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default CheckBox;
