import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DropDown from '../Shared/DropDown';
import Field from '../Shared/Field';
import './CreateItem.css';
import categories from '../mock-data/categories';
import ImageSelector from '../Shared/ImageSelector';
import SubmitButton from '../Shared/SubmitButton';
import makeid from '../Shared/methods/makeid';

const { useNavigate } = require('react-router-dom');

const CreateItem = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const [item, setItem] = useState({
    categoryId: 0, variants: [], name: '', description: '', price: 0, quantity: 0, images: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentFieldIndex, setCurrentFieldIndex] = useState({ index: 0, field: 'name' });
  const [formValidity, setFormValidity] = useState(false);
  const [t] = useTranslation();
  const navigate = useNavigate();

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

  const setFormValidityNow = (value) => {
    if (value === false) {
      setFormValidity(false);
      return;
    }
    setFormValidity(true);
  };

  return (
    <main className="container">
      <form onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);

        if (formValidity && selectedImages.files.length > 0) {
          navigate('/');
        }
      }}
      >
        <div className="item-input-section gray-background">
          <div>
            {' '}
            {t('createItem')}
            {' '}
          </div>
          <Field
            placeholder={t('name')}
            type="text"
            setParentValue={(value) => {
              setItem({ ...item, name: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            submitted={submitted}
            setParentFormValidity={(value) => { setFormValidityNow(value); }}
            setChildValue={item.name}
          />
          <Field
            placeholder={t('description')}
            type="text"
            textarea
            setParentValue={(value) => {
              setItem({ ...item, description: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            submitted={submitted}
            setParentFormValidity={(value) => { setFormValidityNow(value); }}
            setChildValue={item.description}

          />
        </div>

        <div className="item-input-section gray-background">
          <div>
            {' '}
            {t('category')}
            {' '}
          </div>
          <DropDown categoryName="Category" dropdownValues={categories} setParentValue={setSelectedCategoryNow} bgColorClass="white-background" submitted={submitted} />
          <div>
            {' '}
            {t('subcategory')}
          </div>
          <DropDown categoryName="Subcategory" dropdownValues={categories.filter((c) => c.id === item.categoryId)[0].subcategories} bgColorClass="white-background" setParentValue={(value) => { setItem({ ...item, subcategoryId: value.id }); }} submitted={submitted} />
        </div>

        <div className="item-input-section gray-background">
          <div className="rounded">
            {selectedImages.urls.map((url) => (<img className="create-item-images" key={makeid(10)} src={url} alt="item" />))}
          </div>
          {submitted && !selectedImages.urls.length && <div className="text-danger text-center">{t('errors.imageRequired')}</div>}
          <ImageSelector
            setImages={setSelectedImagesNow}
            numberOfImages={15}
          />
        </div>

        <div className="item-input-section gray-background">
          <div>
            {' '}
            {t('price')}
            {' '}
          </div>
          <Field
            placeholder={t('priceInIQDEg')}
            type="number"
            setParentValue={(value) => {
              setItem({ ...item, price: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            submitted={submitted}
            setChildValue={item.price}
            setParentFormValidity={(value) => { setFormValidityNow(value); }}
          />
          <Field
            placeholder={t('costInIQDEg')}
            type="number"
            setParentValue={(value) => {
              setItem({ ...item, cost: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            setChildValue={item.cost}

          />
          <div className="text-muted text-end">
            {t('profit')}
            {' '}
            :
            {item.price - item.cost}
          </div>
          <div className="text-danger text-end">{t('usersWillNotSeeThis')}</div>
          <Field
            placeholder={t('numbersAvailableEg')}
            type="number"
            setParentValue={(value) => {
              setItem({ ...item, quantity: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            submitted={submitted}
            setChildValue={item.quantity}
            setParentFormValidity={(value) => { setFormValidityNow(value); }}

          />
        </div>

        <div className="item-input-section gray-background">
          <div>
            {' '}
            {t('tags')}
            {' '}
          </div>
          <Field
            placeholder={t('tagsEg')}
            type="text"
            setParentValue={(value) => { setItem({ ...item, tags: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }}
            setChildValue={item.tags}
          />
        </div>

        <div className="item-input-section gray-background">
          <div>
            {' '}
            {t('shipping')}
            {' '}
          </div>
          <Field
            placeholder={t('shippingEg')}
            type="number"
            setParentValue={(value) => {
              setItem({ ...item, shippingWeight: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            submitted={submitted}
            setChildValue={item.shippingWeight}
            setParentFormValidity={(value) => { setFormValidityNow(value); }}
            isFLoat
          />
        </div>

        <div className="item-input-section gray-background">
          <div>
            {' '}
            {t('variants')}
            {' '}
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => { setCheckboxChecked(e.target.checked); }} />
            <span className="form-check-label" htmlFor="flexCheckDefault">
              {t('thisItemHasVariants')}
            </span>
          </div>
          <div className={`${checkboxChecked ? 'd-block' : 'd-none'}`}>
            {item.variants.length > 0
              && item.variants.length < 15
              && Array(item.variants.length).fill(0).map((_, indexOfVariant) => (
                <div key={makeid(10)}>
                  <Field
                    placeholder={t('variantNameEg')}
                    type="text"
                    setParentValue={(value) => { setVariantName(value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'name' }); }}
                    setChildValue={item.variants[indexOfVariant].name}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'name'}
                    setParentFormValidity={(value) => { setFormValidityNow(value); }}

                  />
                  <Field
                    placeholder={t('variantValuesEg')}
                    type="number"
                    setParentValue={(value) => { setVariantPrice(value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'price' }); }}
                    setChildValue={item.variants[indexOfVariant].price}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'price'}
                    setParentFormValidity={(value) => { setFormValidityNow(value); }}

                  />
                  <div>{t('chooseImages')}</div>
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
                      <u><div className="text-danger">{t('removeVariant')}</div></u>
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
              <u><div>{t('addVariant')}</div></u>
            </button>
          </div>
        </div>
        {((!formValidity && submitted) || selectedImages.files.length === 0) && <div className="alert alert-danger" role="alert">{t('fillInRequiredFields')}</div>}
        <div className="mt-5">
          <SubmitButton name="Create" />
        </div>
      </form>
    </main>
  );
};

export default CreateItem;
