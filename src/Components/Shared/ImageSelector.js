import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './ImageSelector.css';

const ImageSelector = ({ numberOfImages, setImages }) => {
  const imageInputRef = useRef(null);
  const [alert, setAlert] = useState('');

  const onImagesChange = (event) => {
    if (event.target.files) {
      if (event.target.files.length > numberOfImages) {
        setAlert(`You can only upload ${numberOfImages} images`);
      } else {
        const urls = [];
        Object.values(event.target.files).forEach((file) => {
          const url = URL.createObjectURL(file);
          urls.push(url);
        });
        setImages(urls, event.target.values);
      }
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-rounded btn-warning orange-border float-left form-control mt-3 p-3" onClick={() => imageInputRef.current.click()}>
        <span>Choose Images</span>
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
