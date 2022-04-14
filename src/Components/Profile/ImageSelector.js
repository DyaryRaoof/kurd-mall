import { useRef } from 'react';
import PropTypes from 'prop-types';
import MateriaIcon from '../Shared/MateriaIcon';

const ImageSelector = ({ setImages }) => {
  const imageInputRef = useRef(null);

  const onImagesChange = (event) => {
    if (event.target.files) {
      const urls = [];
      Object.values(event.target.files).forEach((file) => {
        const url = URL.createObjectURL(file);
        urls.push(url);
      });
      setImages(urls, event.target.files);
    }
  };

  return (
    <div>
      <div className="w-100 d-flex justify-content-end">
        <button type="button" className="icon-button" onClick={() => imageInputRef.current.click()}>
          <MateriaIcon text="create" isLarge orange />
        </button>
      </div>
      <input className="white-text invisible" type="file" onChange={onImagesChange} accept="image/*" ref={imageInputRef} />
    </div>
  );
};

ImageSelector.propTypes = {
  setImages: PropTypes.func.isRequired,
};

export default ImageSelector;
