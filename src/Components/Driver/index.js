import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Field from '../Shared/Field';
import SubmitButton from '../Shared/SubmitButton';
import CheckBox from './CheckBox';
import ImageSelector from '../Shared/ImageSelector';
import makeid from '../Shared/methods/makeid';

import './Driver.css';

const { useNavigate } = require('react-router-dom');

const Driver = () => {
  const [driver, setDriver] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState({
    0: false, 1: false, 2: false, 3: false, 4: false,
  });
  const [selectedProfileImage, setSelectedProfileImage] = useState({ urls: [], files: [] });
  const [selectedLicenseImages, setSelectedLicenseImages] = useState({ urls: [], files: [] });
  const { t } = useTranslation();
  const formValidity = Array(3).fill(false);
  const navigate = useNavigate();

  const setSelectedProfileImageNow = (urls, files) => {
    setSelectedProfileImage({ urls, files });
  };

  const setSelectedLicenseImagesNow = (urls, files) => {
    setSelectedLicenseImages({ urls, files });
  };

  const checkFormValid = () => {
    if ((!checked[0] || !checked[1] || !checked[2] || !checked[3] || !checked[4])
      || selectedLicenseImages.files.length < 4
      || selectedProfileImage.length < 1
      || formValidity.includes(false)) {
      return false;
    }
    return true;
  };

  return (
    <div className="container mb-5">
      <h1 className="orange">{t('driver')}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);

        if (checkFormValid()) {
          navigate('/profile');
        }
      }}
      >
        <div className="d-flex justify-content-center">
          <img src={selectedProfileImage.urls[0] || 'https://randomuser.me/api/portraits/men/1.jpg'} alt="profile" className="rounded-circle profile-image" />
        </div>
        <CheckBox submitted={submitted} text={t('isImageOfYourFace')} setParentValue={(value) => { setChecked({ ...checked, 0: value }); }} />
        <ImageSelector
          setImages={(urls, files) => { setSelectedProfileImageNow(urls, files); }}
          numberOfImages={1}
        />
        <Field
          placeholder={t('name')}
          type="text"
          submitted={submitted}
          setParentValue={(value) => setDriver({ ...driver, name: value })}
          setChildValue={driver.name}
          autoFocus={false}
          name="name"
          setParentFormValidity={(value) => { formValidity[0] = value; }}

        />
        <CheckBox submitted={submitted} text={t('isYourRealName')} setParentValue={(value) => { setChecked({ ...checked, 1: value }); }} />
        <Field
          placeholder={t('email')}
          type="email"
          submitted={submitted}
          setParentValue={(value) => setDriver({ ...driver, email: value })}
          setChildValue={driver.email}
          autoFocus={false}
          name="email"
          setParentFormValidity={(value) => { formValidity[1] = value; }}
        />
        <CheckBox submitted={submitted} text={t('isYourCurrentEmail')} setParentValue={(value) => { setChecked({ ...checked, 2: value }); }} />
        <Field
          placeholder={t('phone')}
          type="number"
          submitted={submitted}
          setParentValue={(value) => setDriver({ ...driver, phone: value })}
          setChildValue={driver.phone}
          autoFocus={false}
          name="tel"
          setParentFormValidity={(value) => { formValidity[2] = value; }}
        />
        <CheckBox submitted={submitted} text={t('isYourCurrentPhone')} setParentValue={(value) => { setChecked({ ...checked, 3: value }); }} />
        <ImageSelector
          setImages={(urls, files) => { setSelectedLicenseImagesNow(urls, files); }}
          numberOfImages={4}
        />
        <div className="d-flex justify-content-center border border-warning border-1">
          {selectedLicenseImages.urls.length > 0 && selectedLicenseImages.urls.map((url) => ((<img key={makeid(10)} src={url} alt="profile" className="size-150px" />)))}
        </div>
        <p>
          {t('addQualityDocuments')}
        </p>

        <div className="d-flex justify-content-between">
          <a href="/#"><p className="orange"><u>{t('termsOfWorkingWithUs')}</u></p></a>
          <CheckBox submitted={submitted} text={t('agreeToTerms')} setParentValue={(value) => { setChecked({ ...checked, 4: value }); }} />
        </div>

        {submitted && !checkFormValid() && <div className="alert alert-danger" role="alert">{t('fillInRequiredFields')}</div>}

        <SubmitButton text="Submit" />

      </form>
    </div>
  );
};

export default Driver;
