import PropTypes from 'prop-types';
import { useState } from 'react';
import Errors from '../Classes/Errors';

const Field = ({
  placeholder, type, submitted, passwordFromParent, name, getPassword,
}) => {
  const [value, setValue] = useState('');
  const errorsClass = new Errors(value, submitted, type, name, passwordFromParent);
  const errors = errorsClass.validate();

  return (
    <div>
      <input className="form-control p-3 m-3" type={type} placeholder={placeholder} onChange={(e) => { setValue(e.target.value); if (name === 'password') { getPassword(e.target.value); } }} value={value} />
      {submitted && errors && <div className="text-danger text-center">{errors}</div>}
    </div>
  );
};

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  passwordFromParent: PropTypes.string,
  name: PropTypes.string,
  getPassword: PropTypes.func,
};

Field.defaultProps = {
  passwordFromParent: '',
  name: '',
  getPassword: () => { },
};

export default Field;
