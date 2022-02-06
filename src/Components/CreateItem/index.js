import { useState } from 'react';
import DropDown from '../Shared/DropDown';
import Field from '../Shared/Field';
import './CreateItem.css';
import categories from '../mock-data/categories';
import ImageSelector from '../Shared/ImageSelector';
import SubmitButton from '../Shared/SubmitButton';
import makeid from '../Shared/methods/makeid';

const CreateItem = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const [item, setItem] = useState({
    categoryId: 0, variants: [], name: '', description: '', price: 0, quantity: 0, images: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentFieldIndex, setCurrentFieldIndex] = useState({ index: 0, field: 'name' });

  const setVariantValues = (objectKey, value, variantIndex) => {
    const newVariants = [...item.variants];
    newVariants[variantIndex][objectKey] = value;
    setItem({ ...item, variants: newVariants });
  };

  const setVariantName = (name, variantIndex) => {
    setVariantValues('name', name, variantIndex);
  };

  const setVariantPrice = (price, variantIndex) => {
    setVariantValues('price', price, variantIndex);
  };

  const setVariantImageIndex = (imageIndex, variantIndex) => {
    setVariantValues('imageIndex', imageIndex, variantIndex);
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
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="item-input-section gray-background">
          <div> Create Item </div>
          <Field placeholder="Name" type="text" setParentValue={(value) => { setItem({ ...item, name: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
          <Field placeholder="Description" type="text" textarea setParentValue={(value) => { setItem({ ...item, description: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
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
          <Field placeholder="Price in IQD: eg. 100000" type="number" setParentValue={(value) => { setItem({ ...item, price: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
          <Field placeholder="Cost in IQD eg. 50000" type="number" setParentValue={(value) => { setItem({ ...item, price: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
          <div className="text-muted text-end">
            Profit :
            {item.price - item.cost}
          </div>
          <div className="text-danger text-end">Users will not see this</div>
          <Field placeholder="Numbers available eg. 10" type="number" setParentValue={(value) => { setItem({ ...item, numbersAvailabel: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div> Tags </div>
          <Field placeholder="Tags. eg. winter, cotton, wool" type="text" setParentValue={(value) => { setItem({ ...item, tags: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div> Shipping </div>
          <Field placeholder="Item Weight in Kg. eg: 0.1 kg" type="number" setParentValue={(value) => { setItem({ ...item, shippingWeight: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} submitted={submitted} />
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
            {item.variants.length > 0
              && item.variants.length < 15
              && Array(item.variants.length).fill(0).map((_, indexOfVariant) => (
                <div key={makeid(10)}>
                  <Field
                    placeholder="Variant Name eg. Size"
                    type="text"
                    setParentValue={(value) => { setVariantName(value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'name' }); }}
                    setChildValue={item.variants[indexOfVariant].name}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'name'}
                  />
                  <Field
                    placeholder="Variant Values eg. Small, Medium, Large"
                    type="number"
                    setParentValue={(value) => { setVariantPrice(value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'price' }); }}
                    setChildValue={item.variants[indexOfVariant].price}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'price'}
                  />
                  <div>select image</div>
                  <div className="rounded">
                    {selectedImages.urls.map((url, index) => (
                      <button
                        type="button"
                        key={makeid(10)}
                        onClick={() => { setVariantImageIndex(index, indexOfVariant); }}
                        className={`icon-button ${item.variants && item.variants[indexOfVariant] && item.variants[indexOfVariant].imageIndex === index ? 'border border-3 border-danger' : ''}`}
                      >
                        <img className="create-item-images" src={url} alt="item" />
                      </button>
                    ))}
                  </div>
                  <div className="text-end">
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => {
                        const newVariants = [...item.variants];
                        newVariants.splice(indexOfVariant, 1);
                        setItem({ ...item, variants: newVariants });
                      }}
                    >
                      <u><div className="text-danger">Remove Variant</div></u>
                    </button>
                  </div>
                  <hr />
                </div>
              ))}
            <button
              type="button"
              className="icon-button"
              onClick={() => {
                const newVariants = [...item.variants];
                newVariants.push({
                  name: '',
                  price: '',
                  imageIndex: '',
                });
                setItem({ ...item, variants: newVariants });
              }}
            >
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
