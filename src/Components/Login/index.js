import { useState } from 'react';
import signUP from '../../images/design/sign-up.png';
import Field from '../Shared/Field';

const Login = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="container sign-up-main">
      <div className="row">
        <div className="col-md-6">
          <img src={signUP} className="sign-up-image" alt="avatar" />
        </div>
        <div className="col-md-6">
          <h1 className="orange text-center sign-up-header">Hi</h1>
          <p className="text-center">
            Not a member?
            <a className="orange" href="/sign-up"> Sign Up</a>
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          >
            <Field placeholder="Email" type="email" submitted={submitted} />
            <Field placeholder="Password" type="password" submitted={submitted} />
            <button type="submit" className="form-control orange p-3 m-3">Sign Up</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
