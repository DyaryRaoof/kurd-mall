import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../mock-data/user';
import MateriaIcon from '../Shared/MateriaIcon';
import ImageSelector from './ImageSelector';
import RoundOrangeIconButton from '../Shared/RoundOrangeIconButton';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const {
    name, email, phone, image,
  } = user;

  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const setSelectedImagesNow = (urls, files) => {
    setSelectedImages({ urls, files });
  };

  return (
    <div className="container">
      <h1 className="orange">Profile</h1>

      <div className="rounded gray-background p-2 m-2">
        <img src={selectedImages.urls[0] || image} alt="profile" className="rounded-circle profile-image" />
        <ImageSelector setImages={setSelectedImagesNow} />

      </div>
      <div className="rounded gray-background m-2 p-2">
        <p>
          <span className="orange">Name:</span>
          {name}
        </p>
        <p>
          <span className="orange">Email:</span>
          {email}
        </p>
        <p>
          <span className="orange">Phone:</span>
          {phone}
        </p>
        <div className=" d-flex justify-content-end ">
          <button type="button" className="icon-button" onClick={() => navigate('/profile-edit', { state: { user } })}>
            <MateriaIcon text="create" isLarge orange />
          </button>
        </div>
      </div>
      <RoundOrangeIconButton iconName="local_shipping" buttonText="Become A Driver" isLarge />
    </div>
  );
};

export default Profile;
