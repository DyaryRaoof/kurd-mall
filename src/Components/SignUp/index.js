import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import signUP from '../../images/design/sign-up.png';
import Field from '../Shared/Field';
import './SignUp.css';
import { signUpUser } from '../../api/user';

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [password, setPassword] = useState('');
  const [returnedErrors, setReturnedErrors] = useState(null);
  const [t] = useTranslation();
  const getPassword = (passwordFromChild) => {
    setPassword(passwordFromChild);
  };

  const formValidity = Array(5).fill(false);
  const [fieldValues, setFieldValues] = useState(Array(5).fill(''));
  const navigate = useNavigate();

  const setParentValueNow = (value, index) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };

  const setFormValidityNow = (value, index) => {
    formValidity[index] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!formValidity.includes(false)) {
      const user = {
        user: {
          name: fieldValues[0],
          email: fieldValues[1],
          phone: fieldValues[2],
          password: fieldValues[3],
          password_confirmation: fieldValues[4],
        },
      };
      const response = await signUpUser(user);
      if (response.status === 200) {
        navigate('/log-in');
      } else {
        setReturnedErrors(JSON.stringify(response.data));
      }
    }
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
            {t('alreadyAMember')}
            <a className="orange" href="/log-in">
              {' '}
              {t('logIn')}
            </a>
          </p>
          <form onSubmit={(e) => {
            handleSubmit(e);
          }}
          >
            <Field
              placeholder={t('name')}
              type="text"
              submitted={submitted}
              setParentValue={(value) => { setParentValueNow(value, 0); }}
              setParentFormValidity={(value) => { setFormValidityNow(value, 0); }}
              setChildValue={fieldValues[0]}

            />
            <Field
              placeholder={t('email')}
              type="email"
              submitted={submitted}
              setParentValue={(value) => { setParentValueNow(value, 1); }}
              setParentFormValidity={(value) => { setFormValidityNow(value, 1); }}
              setChildValue={fieldValues[1]}
            />
            <Field
              placeholder={t('phoneNumber')}
              type="number"
              name="tel"
              submitted={submitted}
              setParentValue={(value) => { setParentValueNow(value, 2); }}
              setParentFormValidity={(value) => { setFormValidityNow(value, 2); }}
              setChildValue={fieldValues[2]}
            />
            <Field
              placeholder={t('password')}
              type="password"
              submitted={submitted}
              getPassword={getPassword}
              name="password"
              setParentValue={(value) => { setParentValueNow(value, 3); }}
              setParentFormValidity={(value) => { setFormValidityNow(value, 3); }}
              setChildValue={fieldValues[3]}
            />
            <Field
              placeholder={t('confirmPassword')}
              type="password"
              submitted={submitted}
              passwordFromParent={password}
              name="password-confirmation"
              setParentValue={(value) => { setParentValueNow(value, 4); }}
              setParentFormValidity={
                (value) => { setFormValidityNow(value, 4); }
              }
              setChildValue={fieldValues[4]}
            />
            <button type="submit" className="form-control orange p-3 my-3">{t('signUp')}</button>
            {returnedErrors && <div className="alert alert-danger text-center">{returnedErrors}</div>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
