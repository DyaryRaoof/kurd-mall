import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import signUP from '../../images/design/sign-up.png';
import Field from '../Shared/Field';

const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const formValidity = [false, false];
  const [t] = useTranslation();
  const [fieldValues, setFieldValues] = useState(['', '']);

  const setParentValueNow = (value, index) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
    console.log(value);
  };

  const setFormValidityNow = (value, index) => {
    formValidity[index] = value;
  };

  return (
    <main className="container sign-up-main">
      <div className="row">
        <div className="col-md-6">
          <img src={signUP} className="sign-up-image" alt="avatar" />
        </div>
        <div className="col-md-6">
          <h1 className="orange text-center sign-up-header">{t('hi')}</h1>
          <p className="text-center">
            {t('notAMember')}
            <a className="orange" href="/sign-up">{t('signUp')}</a>
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            console.log(formValidity);
            if (!formValidity.includes(false)) {
              console.log('Form submitted');
            }
          }}
          >
            <Field
              placeholder="Email"
              type="email"
              submitted={submitted}
              setParentValue={(value) => { setParentValueNow(value, 0); }}
              setChildValue={fieldValues[0]}
              setParentFormValidity={(value) => { setFormValidityNow(value, 0); }}
            />
            <Field
              placeholder="Password"
              type="password"
              submitted={submitted}
              setParentValue={(value) => { setParentValueNow(value, 1); }}
              setChildValue={fieldValues[1]}
              setParentFormValidity={(value) => { setFormValidityNow(value, 1); }}
            />
            <button type="submit" className="form-control orange p-3 my-3">{t('logIn')}</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
