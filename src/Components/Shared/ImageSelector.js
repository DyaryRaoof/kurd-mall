import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './ImageSelector.css';

const ImageSelector = ({ numberOfImages, setImages }) => {
  const imageInputRef = useRef(null);
  const [alert, setAlert] = useState('');
  const { t } = useTranslation();

  const onImagesChange = (event) => {
    if (event.target.files) {
      if (event.target.files.length > numberOfImages) {
        setAlert(`${t('youCanUpload')} ${numberOfImages} ${t('images')}`);
      } else {
        const urls = [];
        Object.values(event.target.files).forEach((file) => {
          const url = URL.createObjectURL(file);
          urls.push(url);
        });
        setImages(urls, event.target.files);
      }
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-rounded btn-warning orange-border float-left form-control mt-3 p-3" onClick={() => imageInputRef.current.click()}>
        <span>{t('chooseImages')}</span>
      </button>
      <div className="text-danger text-center">{alert}</div>
      <input className="white-text invisible" type="file" multiple onChange={onImagesChange} accept="image/*" ref={imageInputRef} />
    </div>
  );
};

ImageSelector.propTypes = {
  numberOfImages: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
};

export default ImageSelector;
