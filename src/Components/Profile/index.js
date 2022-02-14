import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import user from '../mock-data/user';
import MateriaIcon from '../Shared/MateriaIcon';
import ImageSelector from './ImageSelector';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    name, email, phone, image,
  } = user;

  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const setSelectedImagesNow = (urls, files) => {
    setSelectedImages({ urls, files });
  };

  return (
    <div className="container">
      <h1 className="orange">{t('profile')}</h1>

      <div className="rounded gray-background p-2 m-2">
        <img src={selectedImages.urls[0] || image} alt="profile" className="rounded-circle profile-image" />
        <ImageSelector setImages={setSelectedImagesNow} />

      </div>
      <div className="rounded gray-background m-2 p-2">
        <p>
          <span className="orange">
            {t('name')}
            :
          </span>
          {name}
        </p>
        <p>
          <span className="orange">
            {t('email')}
            :
          </span>
          {email}
        </p>
        <p className="d-flex">
          <span className="orange">
            {t('phone')}
            :
          </span>
          <span>{phone}</span>
        </p>
        <div className=" d-flex justify-content-end ">
          <button type="button" className="icon-button" onClick={() => navigate('/profile-edit', { state: { user } })}>
            <MateriaIcon text="create" isLarge orange />
          </button>
        </div>
      </div>
      <RoundOrangeIconButton iconName="local_shipping" buttonText={t('becomeDriver')} isLarge onPressed={() => navigate('/driver')} />
    </div>
  );
};

export default Profile;
