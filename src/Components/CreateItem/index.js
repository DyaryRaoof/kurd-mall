import { useState } from 'react';
import DropDown from '../Shared/DropDown';
import Field from '../Shared/Field';
import './CreateItem.css';
import categories from '../mock-data/categories';
import ImageSelector from '../Shared/ImageSelector';
import SubmitButton from '../Shared/SubmitButton';
import makeid from '../Shared/methods/makeid';

const CreateItem = () => {
  const [variantNumber, setVariantNumber] = useState(0);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const [item, setItem] = useState({ categoryId: 0 });
  const [submitted, setSubmitted] = useState(false);

  const setVariantName = (name, variantIndex) => {
    if (!item.variants) {
      item.variants = [];
    }
    const newVariants = [...item.variants];
    if (newVariants[variantIndex]) {
      newVariants[variantIndex].name = name;
    } else {
      newVariants.push({ name });
    }
    setItem({ ...item, variants: newVariants });
  };

  const setVariantPrice = (price, variantIndex) => {
    if (!item.variants) {
      item.variants = [];
    }
    const newVariants = [...item.variants];
    if (newVariants[variantIndex]) {
      newVariants[variantIndex].price = price;
    } else {
      newVariants.push({ price });
    }
    newVariants[variantIndex].price = price;
    setItem({ ...item, variants: newVariants });
  };

  const setVariantImageIndex = (imageIndex, variantIndex) => {
    if (!item.variants) {
      item.variants = [];
    }

    const newVariants = [...item.variants];
    if (newVariants[variantIndex]) {
      newVariants[variantIndex].imageIndex = imageIndex;
    } else {
      newVariants.push({ imageIndex });
    }
    newVariants[variantIndex].imageIndex = imageIndex;
    setItem({ ...item, variants: newVariants });
  };

  const setSelectedCategoryNow = (category) => {
    setItem({ ...item, categoryId: category.id });
  };

  const setSelectedImagesNow = (urls, files) => {
    setSelectedImages({ urls, files });
    setItem({ ...item, images: urls });
  };

  return (
    <main className="container">
      <form onSubmit={(e) => { e.preventDefault(); console.log(item); setSubmitted(true); }}>
        <div className="item-input-section gray-background">
          <div> Create Item </div>
          <Field placeholder="Name" type="text" setParentValue={(value) => { setItem({ ...item, name: value }); }} submitted={submitted} />
          <Field placeholder="Description" type="text" textarea setParentValue={(value) => { setItem({ ...item, description: value }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div> Category </div>
          <DropDown categoryName="Category" dropdownValues={categories} setSelectedCategory={setSelectedCategoryNow} bgColorClass="white-background" submitted={submitted} />
          <div> Subcategory </div>
          <DropDown categoryName="Subcategory" dropdownValues={categories.filter((c) => c.id === item.categoryId)[0].subcategories} bgColorClass="white-background" setParentValue={(value) => { setItem({ ...item, subcategoryId: value.id }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div className="rounded">
            {selectedImages.urls.map((url) => (<img className="create-item-images" key={makeid(10)} src={url} alt="item" />))}
          </div>
          {submitted && !selectedImages.urls.length && <div className="text-danger text-center">Please select at least one image</div>}
          <ImageSelector
            setImages={setSelectedImagesNow}
            numberOfImages={15}
          />
        </div>

        <div className="item-input-section gray-background">
          <div> Pricing </div>
          <Field placeholder="Price in IQD: eg. 100000" type="number" setParentValue={(value) => { setItem({ ...item, price: value }); }} submitted={submitted} />
          <Field placeholder="Cost in IQD eg. 50000" type="number" setParentValue={(value) => { setItem({ ...item, price: value }); }} submitted={submitted} />
          <div className="text-muted text-end">
            Profit :
            {item.price - item.cost}
          </div>
          <div className="text-danger text-end">Users will not see this</div>
          <Field placeholder="Numbers available eg. 10" type="number" setParentValue={(value) => { setItem({ ...item, numbersAvailabel: value }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div> Tags </div>
          <Field placeholder="Tags. eg. winter, cotton, wool" type="text" setParentValue={(value) => { setItem({ ...item, tags: value }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div> Shipping </div>
          <Field placeholder="Item Weight in Kg. eg: 0.1 kg" type="number" setParentValue={(value) => { setItem({ ...item, shippingWeight: value }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div> Variants </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => { setCheckboxChecked(e.target.checked); }} />
            <span className="form-check-label" htmlFor="flexCheckDefault">
              This item is has variants for example size, color, etc.
            </span>
          </div>
          <div className={`${checkboxChecked ? 'd-block' : 'd-none'}`}>
            {variantNumber > 0
              && variantNumber < 15
              && Array(variantNumber).fill(0).map((_, indexOfVariant) => (
                <div key={makeid(10)}>
                  <Field placeholder="Variant Name eg. Size" type="text" setParentValue={(value) => { setVariantName(value, indexOfVariant); }} submitted={submitted} />
                  <Field placeholder="Variant Values eg. Small, Medium, Large" type="text" setParentValue={(value) => { setVariantPrice(value, indexOfVariant); }} submitted={submitted} />
                  <div>select image</div>
                  <div className="rounded">
                    {selectedImages.urls.map((url, index) => (
                      <button type="button" key={makeid(10)} onClick={() => { setVariantImageIndex(index, indexOfVariant); }} className={`icon-button ${item.variants && item.variants[indexOfVariant] && item.variants[indexOfVariant].imageIndex === index ? 'border border-3 border-danger' : ''}`}>
                        <img className="create-item-images" src={url} alt="item" />
                      </button>
                    ))}
                  </div>
                  <hr />
                </div>
              ))}
            <button type="button" className="icon-button" onClick={() => { setVariantNumber(variantNumber + 1); }}>
              <u><div>Add Variant</div></u>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <SubmitButton name="Create" />
        </div>
      </form>
    </main>
  );
};

export default CreateItem;
