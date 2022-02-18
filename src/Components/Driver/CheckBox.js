import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CheckBox = ({ submitted, setParentValue: onChange, text }) => {
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value={checked} id="flexCheckDefault" onChange={(e) => { onChange(e.target.checked); setChecked(e.target.checked); }} />
      <span className="form-check-label" htmlFor="flexCheckDefault">
        {text}
      </span>
      <p className="text-danger">{submitted && !checked && t('errors.fieldRequired')}</p>
    </div>
  );
};

CheckBox.propTypes = {
  submitted: PropTypes.bool.isRequired,
  setParentValue: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default CheckBox;
