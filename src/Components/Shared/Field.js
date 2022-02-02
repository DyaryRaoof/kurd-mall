import PropTypes from 'prop-types';
import { useState } from 'react';
import FieldErrors from '../Classes/FieldErrors';

const Field = ({
  placeholder, type, submitted, passwordFromParent,
  name, getPassword, textarea, setParentValue,
}) => {
  const [value, setValue] = useState('');
  const errorsClass = new FieldErrors(value, submitted, type, name, passwordFromParent);
  const errors = errorsClass.validate();

  return (
    <div>

      {!textarea ? (
        <input
          className="form-control p-3 my-3"
          type={type}
          placeholder={placeholder}
          onChange={(e) => { setValue(e.target.value); setParentValue(e.target.value); if (name === 'password') { getPassword(e.target.value); } }}
          value={value}
        />
      )
        : (
          <textarea
            className="form-control p-3 my-3"
            type={type}
            placeholder={placeholder}
            onChange={(e) => { setValue(e.target.value); setParentValue(e.target.value); if (name === 'password') { getPassword(e.target.value); } }}
            value={value}
          />
        )}
      {submitted && errors && <div className="text-danger text-center">{errors}</div>}
    </div>
  );
};

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  submitted: PropTypes.bool,
  passwordFromParent: PropTypes.string,
  name: PropTypes.string,
  getPassword: PropTypes.func,
  textarea: PropTypes.bool,
  setParentValue: PropTypes.func,
};

Field.defaultProps = {
  passwordFromParent: '',
  name: '',
  getPassword: () => { },
  submitted: false,
  textarea: false,
  setParentValue: () => { },
};

export default Field;
