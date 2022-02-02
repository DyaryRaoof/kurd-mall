import { useState } from 'react';
import DropDown from '../Shared/DropDown';
import Field from '../Shared/Field';
import './CreateItem.css';
import categories from '../mock-data/categories';
import ImageSelector from '../Shared/ImageSelector';

const CreateItem = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);

  const setSelectedCategoryNow = (category) => {
    setSelectedCategory(category);
  };

  const setSelectedImagesNow = (urls, files) => {
    setSelectedImages({ urls, files });
  };

  return (
    <main className="container">
      <form>
        <div className="item-input-section gray-background">
          <div> Create Item </div>
          <Field placeholder="Name" type="text" />
          <Field placeholder="Description" type="text" textarea />
        </div>

        <div className="item-input-section gray-background">
          <div> Category </div>
          <DropDown categoryName="Category" dropdownValues={categories} setSelectedCategory={setSelectedCategoryNow} bgColorClass="white-background" />
          <div> Subcategory </div>
          <DropDown categoryName="Subcategory" dropdownValues={selectedCategory.subcategories} bgColorClass="white-background" />
        </div>

        <div className="item-input-section gray-background">
          <div className="rounded">
            {selectedImages.urls.map((url, index) => (<img className="create-item-images" key={`key ${index}`.name} src={url} alt="item" />))}
          </div>
          <ImageSelector setImages={setSelectedImagesNow} numberOfImages={15} />
        </div>

        <div className="item-input-section gray-background">
          <div> Pricing </div>
          <Field placeholder="Price in IQD: eg. 100000" type="number" setParentValue={setPrice} />
          <Field placeholder="Cost in IQD eg. 50000" type="number" setParentValue={setCost} />
          <div className="text-muted text-end">
            Profiet :
            {price - cost}
          </div>
          <div className="text-danger text-end">Users will not see this</div>
          <Field placeholder="Numbers available eg. 10" type="number" />
        </div>

        <div className="item-input-section gray-background">
          <div> Tags </div>
          <Field placeholder="Tags. eg. winter, cotton, wool" type="text" />
        </div>

        <div className="item-input-section gray-background">
          <div> Shipping </div>
          <Field placeholder="Item Weight in Kg. eg: 0.1 kg" type="number" />
        </div>

        <div className="item-input-section gray-background">
          <div> Variants </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <span className="form-check-label" htmlFor="flexCheckDefault">
              This item is has variants
            </span>
          </div>
          <Field placeholder="Variant Name eg. Size" type="text" />
          <Field placeholder="Variant Values eg. Small, Medium, Large" type="text" />
          <button type="button" className="icon-button">
            <u><div>Add Another Vairnat</div></u>
          </button>
        </div>

      </form>
    </main>
  );
};

export default CreateItem;
