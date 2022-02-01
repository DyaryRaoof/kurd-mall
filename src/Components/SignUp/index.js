import { useState } from 'react';
import signUP from '../../images/design/sign-up.png';
import Field from './Field';
import './SignUp.css';

const SignUp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [password, setPassword] = useState('');

  const getPassword = (passwordFromChild) => {
    setPassword(passwordFromChild);
  };

  return (
    <main className="container sign-up-main">
      <div className="row">
        <div className="col-md-6">
          <img src={signUP} className="sign-up-image" alt="avatar" />
        </div>
        <div className="col-md-6">
          <h1 className="orange text-center sign-up-header">Hi</h1>
          <p className="text-center">
            Already a member?
            <a className="orange" href="/log-in"> Login</a>
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          >
            <Field placeholder="Name" type="text" submitted={submitted} />
            <Field placeholder="Email" type="email" submitted={submitted} error="You need an actual email address. " />
            <Field placeholder="Phone number" type="tel" submitted={submitted} />
            <Field placeholder="Password" type="password" submitted={submitted} getPassword={getPassword} />
            <Field placeholder="Confirm Password" type="password" submitted={submitted} passwordFromParent={password} name="password-confirmation" />
            <button type="submit" className="form-control orange">Sign Up</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
