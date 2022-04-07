import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Field from '../Shared/Field';
import SubmitButton from '../Shared/SubmitButton';
import { updateUserDetails } from '../../api/profile';

const ProfileEdit = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    user,
  } = location.state;
  const [submitted, setSubmitted] = useState(false);
  const [fieldValues, setFieldValues] = useState([user.name, user.phone]);
  const formValidity = Array(2).fill(false);

  const setParentValueNow = (value, index) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };

  return (
    <div className="container mb-5">
      <h1 className="orange">{t('editProfile')}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!formValidity.includes(false)) {
          updateUserDetails({
            user: {
              name: fieldValues[0],
              phone: fieldValues[1],
            },
          })
            .then(() => {
              navigate('/log-in');
            });
        }
      }}
      >
        <Field
          placeholder="Name"
          type="text"
          submitted={submitted}
          setParentValue={(value) => { setParentValueNow(value, 0); }}
          setChildValue={fieldValues[0]}
          setParentFormValidity={(value) => { formValidity[0] = value; }}
        />
        <Field
          placeholder="Phone"
          type="number"
          name="tel"
          submitted={submitted}
          setParentValue={(value) => { setParentValueNow(value, 1); }}
          setChildValue={fieldValues[1]}
          setParentFormValidity={(value) => { formValidity[1] = value; }}
        />
        <SubmitButton name={t('done')} />
      </form>
    </div>
  );
};

export default ProfileEdit;
