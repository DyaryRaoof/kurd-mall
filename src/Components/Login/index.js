import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import signUP from '../../images/design/sign-up.png';
import Field from '../Shared/Field';
import { setUser } from '../../redux/user/user';
import { signInUser } from '../../api/user';

const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const formValidity = [false, false];
  const [t] = useTranslation();
  const [fieldValues, setFieldValues] = useState(['', '']);
  const navigate = useNavigate();
  const [returnedErrors, setReturnedErrors] = useState(null);

  const setParentValueNow = (value, index) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };

  const setFormValidityNow = (value, index) => {
    formValidity[index] = value;
  };

  const disptch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!formValidity.includes(false)) {
      const response = await signInUser({
        user: {
          email: fieldValues[0],
          password: fieldValues[1],
        },
      });
      if (response.status === 200) {
        disptch(setUser(response.data.user));
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', JSON.stringify(response.headers.authorization));
        navigate('/');
        window.location.reload();
      } else {
        setReturnedErrors(JSON.stringify(response.data));
        // window.location.reload();
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
            {t('notAMember')}
            <a className="orange" href="/sign-up">{t('signUp')}</a>
          </p>
          <form onSubmit={(e) => {
            handleSubmit(e);
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
            {returnedErrors && <div className="alert alert-danger text-center">{returnedErrors}</div>}

          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
