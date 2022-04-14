import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MateriaIcon from '../Shared/MateriaIcon';
import ImageSelector from './ImageSelector';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import './Profile.css';
import { updateUserImage } from '../../api/profile';

const Profile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user'));
  const {
    name, email, phone, image_urls: imageURLS,
  } = user;

  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const setSelectedImagesNow = (urls, files) => {
    setSelectedImages({ urls, files });
    updateUserImage(files[0]);
  };

  return (
    <div className="container">
      <h1 className="orange">{t('profile')}</h1>

      <div className="rounded gray-background p-2 m-2">
        <img src={selectedImages.urls[0] || imageURLS[0]} alt="profile" className="rounded-circle profile-image" />
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

      <div className="d-flex justify-content-center">
        <RoundOrangeIconButton iconName="apps" buttonText={t('myCollection')} isLarge onPressed={() => navigate('/my-collection')} />
      </div>
    </div>
  );
};

export default Profile;
