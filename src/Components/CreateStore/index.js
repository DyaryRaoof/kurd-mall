import { useState } from 'react';
import Field from '../Shared/Field';
import createStore from '../../images/design/create-store.png';
import './CreateStore.css';
import DropDown from '../Shared/DropDown';
import categories from '../mock-data/categories';
import cities from '../mock-data/cities';
import ImageSelector from '../Shared/ImageSelector';

const CreateStore = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const setSelectedCategoryNow = (category) => {
    setSelectedCategory(category);
  };

  const [images, setImages] = useState({ urls: [], originalFiles: [] });

  const setImagesNow = (urls, originalFiles) => {
    setImages({ urls, originalFiles });
  };

  return (
    <main className="create-store-main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={createStore} className="create-store-image" alt="avatar" />
          </div>
          <div className="col-md-6 text-center">
            <h1 className="orange text-center create-store-heading">Create A Store</h1>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <Field placeholder="Store Name" type="text" submitted={submitted} />
              <Field placeholder="Store Info" type="text" submitted={submitted} />
              <Field placeholder="Store Address" type="text" submitted={submitted} />
              <Field placeholder="Facebook Link" type="text" />
              <Field placeholder="Instagram Link" type="text" />
              <Field placeholder="Store Description" type="text" submitted={submitted} />
              <DropDown dropdownValues={categories} categoryName="Category" setSelectedCategory={setSelectedCategoryNow} submitted={submitted} />
              <DropDown
                dropdownValues={categories.filter((c) => c.id === selectedCategory.id)[0]
                  .subcategories}
                categoryName="Subcategory"
                submitted={submitted}
              />
              <DropDown dropdownValues={cities} categoryName="City" submitted={submitted} />
              <ImageSelector numberOfImages={5} setImages={setImagesNow} />
              {images.urls && images.urls.length > 0 && (<div className="d-flex orange-border">{images.urls && images.urls.map((i) => <img className="p-2 m-2 store-images" key={i.name} src={i} alt="Store" />)}</div>)}
              {submitted && images.urls.length < 1 && (<div className="text-danger text-center">{'You should select at least one image}'}</div>)}
              <button type="submit" className="form-control p-3 my-3">Create Store</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateStore;
