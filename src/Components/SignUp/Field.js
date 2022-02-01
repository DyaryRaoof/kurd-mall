import PropTypes from 'prop-types';
import { useState } from 'react';

const Field = ({
  placeholder, type, submitted, passwordFromParent, name, getPassword,
}) => {
  let errors = [];
  const [value, setValue] = useState('');
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value === '' && submitted) {
    errors = [...errors, 'This field is required. '];
  }

  if (type === 'email' && !value.toLocaleLowerCase(emailRegex).match(emailRegex) && submitted) {
    errors = [...errors, 'You need an actual email address. '];
  }

  if (type === 'password' && value.length < 8 && submitted) {
    errors = [...errors, 'Password must be at least 8 characters. '];
  }

  if (type === 'tel' && value.length < 11 && submitted) {
    errors = [...errors, 'Phone number must be at least 11 characters. '];
  }

  if (type === 'password' && passwordFromParent !== '' && value !== passwordFromParent && submitted && name === 'password-confirmation') {
    errors = [...errors, 'Passwords do not match. '];
  }

  return (
    <div>
      <input className="form-control p-3 m-3" type={type} placeholder={placeholder} onChange={(e) => { setValue(e.target.value); getPassword(e.target.value); }} value={value} />
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
