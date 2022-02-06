import PropTypes from 'prop-types';
import FieldErrors from './Classes/FieldErrors';

const Field = ({
  placeholder, type, submitted, passwordFromParent,
  name, getPassword, textarea, setParentValue, setChildValue, autoFocus,
}) => {
  const errorsClass = new FieldErrors(setChildValue || '', submitted, type, name, passwordFromParent);
  const errors = errorsClass.validate();

  return (
    <div>

      {!textarea ? (
        <input
          className="form-control p-3 my-3"
          type={type}
          placeholder={placeholder}
          onChange={(e) => { setParentValue(e.target.value); if (name === 'password') { getPassword(e.target.value); } }}
          value={setChildValue}
          /* eslint-disable  jsx-a11y/no-autofocus */
          autoFocus={autoFocus != null ? autoFocus : false}
        />
      )
        : (
          <textarea
            className="form-control p-3 my-3"
            type={type}
            placeholder={placeholder}
            onChange={(e) => { setParentValue(e.target.value); if (name === 'password') { getPassword(e.target.value); } }}
            value={setChildValue}
            /* eslint-disable jsx-a11y/no-autofocus */
            autoFocus={autoFocus != null ? autoFocus : false}
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
  setChildValue: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool.isRequired,
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
