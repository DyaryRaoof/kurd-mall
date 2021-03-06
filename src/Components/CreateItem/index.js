import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Field from '../Shared/Field';
import './CreateItem.css';
import ImageSelector from '../Shared/ImageSelector';
import SubmitButton from '../Shared/SubmitButton';
import makeid from '../Shared/methods/makeid';
import CurrencyDropdown from '../Shared/CurrencyDropdown';
import TagsField from './TagsField';
import postItem from '../../api/items';
import redirectOnTokenExipiration from '../Shared/methods/redirectOnTokenExipiration';

const { useNavigate, useLocation } = require('react-router-dom');

const CreateItem = () => {
  const location = useLocation();
  const { item: currentItem, isUpdate } = location.state ? location.state : {};
  const navigate = useNavigate();
  redirectOnTokenExipiration(navigate);
  const dispatch = useDispatch();
  const [returnedErrors, setReturnedErrors] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(isUpdate
    ? currentItem.item_variants.length > 0
    : false);
  const [selectedImages, setSelectedImages] = useState({ urls: [], files: [] });
  const store = JSON.parse(localStorage.getItem('store'));

  const [item, setItem] = useState({
    id: isUpdate ? currentItem.id : null,
    categoryId: isUpdate ? currentItem.category_id : '',
    variants: isUpdate ? currentItem.item_variants : [],
    name: isUpdate ? currentItem.name : '',
    currency: isUpdate ? currentItem.currency : '',
    description: isUpdate ? currentItem.description : '',
    price: isUpdate ? currentItem.price : '',
    cost: isUpdate ? currentItem.cost : '',
    quantity: isUpdate ? currentItem.quantity : '',
    images: [],
    tags: isUpdate ? currentItem.tags.map((tag) => tag.name) : [],
    shipping_kg: isUpdate ? currentItem.shipping_kg : '',
    store_name: isUpdate ? currentItem.store_name : store.name,
    store_phone: isUpdate ? currentItem.store_phone : store.phone,
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentFieldIndex, setCurrentFieldIndex] = useState({ index: 0, field: 'name' });
  const [formValidity, setFormValidity] = useState(false);
  const [t] = useTranslation();

  const setVariantValues = (objectKey, value, variantIndex) => {
    const newVariants = [...item.variants];
    newVariants[variantIndex][objectKey] = value;
    if (!newVariants[variantIndex].imageIndex) {
      newVariants[variantIndex].imageIndex = 0;
    }
    setItem({ ...item, variants: newVariants });
  };

  const setVariantImageIndex = (imageIndex, variantIndex) => {
    setVariantValues('imageIndex', imageIndex, variantIndex);
  };

  const setSelectedImagesNow = (urls, files) => {
    setSelectedImages({ urls, files });
    setItem({ ...item, images: files });
  };

  const setFormValidityNow = (value) => {
    if (value === false) {
      setFormValidity(false);
      return;
    }
    setFormValidity(true);
  };

  const checkAllItemVariantsHaveImages = () => {
    const newVariants = [...item.variants];
    let isAllHaveImages = true;
    newVariants.forEach((variant) => {
      if (variant.imageIndex === undefined) {
        isAllHaveImages = false;
      }
    });
    return isAllHaveImages;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (formValidity && selectedImages.files.length > 0 && checkAllItemVariantsHaveImages()) {
      item.store = JSON.parse(localStorage.getItem('store'));
      let response = null;
      if (!isUpdate) {
        response = await postItem(dispatch, item, item.images);
      } else {
        response = await postItem(dispatch, item, item.images, true);
      }
      if (response.status === 201 || response.status === 200) {
        if (!isUpdate) {
          navigate(`/item-detail/${item.id}`, { state: { item: response.data } });
        } else {
          navigate(`/item-detail/${item.id}`);
        }
      } else {
        setReturnedErrors(JSON.stringify(response.data));
      }
    }
  };

  return (
    <main className="container">
      <form onSubmit={async (e) => {
        handleSubmit(e);
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
          <div>
            {' '}
            {t('currency')}
            {' '}
          </div>
          <div className="w-100 d-flex justify-content-start">
            <CurrencyDropdown
              setParentValue={(value) => { item.currency = value; }}
              currencyFromParent={item.currency}
            />
          </div>
          {!item.currency && submitted && <div className="text-danger text-start">{t('errors.fieldRequired')}</div>}
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
          <TagsField setParentValue={(value) => { setItem({ ...item, tags: value }); setCurrentFieldIndex({ index: 0, field: 'other' }); }} tagsFromParent={item.tags} />
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
              setItem({ ...item, shipping_kg: value });
              setCurrentFieldIndex({ index: 0, field: 'other' });
            }}
            submitted={submitted}
            setChildValue={item.shipping_kg}
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
                    setParentValue={(value) => { setVariantValues('name', value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'name' }); }}
                    setChildValue={item.variants[indexOfVariant].name}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'name'}
                    setParentFormValidity={(value) => { setFormValidityNow(value); }}

                  />
                  <Field
                    placeholder={t('variantValuesEg')}
                    type="text"
                    setParentValue={(value) => { setVariantValues('value', value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'value' }); }}
                    setChildValue={item.variants[indexOfVariant].value}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'value'}
                    setParentFormValidity={(value) => { setFormValidityNow(value); }}

                  />

                  <Field
                    placeholder={t('priceInIQDEg')}
                    type="number"
                    setParentValue={(value) => { setVariantValues('price', value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'price' }); }}
                    setChildValue={item.variants[indexOfVariant].price}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'price'}
                    setParentFormValidity={(value) => { setFormValidityNow(value); }}

                  />

                  <Field
                    placeholder={t('costInIQDEg')}
                    type="number"
                    setParentValue={(value) => { setVariantValues('cost', value, indexOfVariant); setCurrentFieldIndex({ index: indexOfVariant, field: 'cost' }); }}
                    setChildValue={item.variants[indexOfVariant].cost}
                    submitted={submitted}
                    autoFocus={currentFieldIndex.index === indexOfVariant && currentFieldIndex.field === 'cost'}
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
                  {submitted && item.variants[indexOfVariant].imageIndex === undefined && <div className="text-danger text-start">{t('selectImage')}</div>}
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
                  value: '',
                  price: '',
                  cost: '',
                  imageIndex: 0,
                });
                setItem({ ...item, variants: newVariants });
              }}
            >
              <u><div>{t('addVariant')}</div></u>
            </button>
          </div>
        </div>
        {((!formValidity && submitted) || selectedImages.files.length === 0 || !checkAllItemVariantsHaveImages()) && <div className="alert alert-danger" role="alert">{t('fillInRequiredFields')}</div>}
        <div className="mt-5">
          <SubmitButton name="Create" />
        </div>
        {returnedErrors && <div className="alert alert-danger text-center my-3">{returnedErrors}</div>}
      </form>
    </main>
  );
};

export default CreateItem;
