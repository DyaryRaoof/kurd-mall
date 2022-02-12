import { useState } from 'react';
import Field from '../Shared/Field';
import SubmitButton from '../Shared/SubmitButton';
import CheckBox from './CheckBox';
import ImageSelector from '../Shared/ImageSelector';

const Driver = () => {
  const [driver, setDriver] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState({ 0: false, 1: false, 2: false });
  const [selectedProfileImage, setSelectedProfileImage] = useState({ urls: [], files: [] });
  const [selectedLicenseImages, setSelectedLicenseImages] = useState({ urls: [], files: [] });

  const setSelectedProfileImageNow = (urls, files) => {
    setSelectedProfileImage({ urls, files });
  };

  const setSelectedLicenseImagesNow = (urls, files) => {
    setSelectedLicenseImages({ urls, files });
  };

  return (
    <div className="container mb-5">
      <h1 className="orange">Drriver</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      >
        <div className="d-flex justify-content-center">
          <img src={selectedProfileImage.urls[0] || 'https://randomuser.me/api/portraits/men/1.jpg'} alt="profile" className="rounded-circle profile-image" />
        </div>
        <CheckBox submitted={submitted} text="Is this a new image of your face?" setParentValue={(value) => { setChecked({ ...checked, 0: value }); }} />
        <ImageSelector setImages={(urls, files) => { setSelectedProfileImageNow(urls, files); }} />
        <Field placeholder="Name" type="text" submitted={submitted} setParentValue={(value) => setDriver({ ...driver, name: value })} setChildValue={driver.name} autoFocus={false} name="name" />
        <CheckBox submitted={submitted} text="is This your real name?" setParentValue={(value) => { setChecked({ ...checked, 1: value }); }} />
        <Field placeholder="email" type="email" submitted={submitted} setParentValue={(value) => setDriver({ ...driver, email: value })} setChildValue={driver.email} autoFocus={false} name="email" />
        <CheckBox submitted={submitted} text="is This your current email?" setParentValue={(value) => { setChecked({ ...checked, 2: value }); }} />
        <Field placeholder="Phone" type="number" submitted={submitted} setParentValue={(value) => setDriver({ ...driver, phone: value })} setChildValue={driver.phone} autoFocus={false} name="phone" />
        <CheckBox submitted={submitted} text="is This your current phone number?" setParentValue={(value) => { setChecked({ ...checked, 3: value }); }} />
        <ImageSelector setImages={(urls, files) => { setSelectedLicenseImagesNow(urls, files); }} />
        <p>
          Please add a high quality picture of your
          National Identity and Personal Identity
        </p>
        {submitted && (!checked[0] || !checked[1] || !checked[2] || !checked[3]) && selectedLicenseImages.files.length < 2 && <div className="alert alert-danger" role="alert">You need to fill in all required fields</div>}
        <SubmitButton text="Submit" />

      </form>
    </div>
  );
};

export default Driver;
