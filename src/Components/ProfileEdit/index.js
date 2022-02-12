import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Field from '../Shared/Field';
import SubmitButton from '../Shared/SubmitButton';

const ProfileEdit = () => {
  const location = useLocation();
  const {
    user,
  } = location.state;
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mb-5">
      <h1 className="orange">Profile Edit</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      >
        <Field placeholder="Name" type="text" submitted={submitted} setParentValue={user.name} setChildValue={user.name} />
        <Field placeholder="Phone" type="number" submitted={submitted} setParentValue={user.phone} setChildValue={user.phone} />
        <SubmitButton name="Done" />
      </form>
    </div>
  );
};

export default ProfileEdit;
