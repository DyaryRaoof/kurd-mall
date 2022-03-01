import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../Shared/Field';
import createStore from '../../images/design/create-store.png';
import './CreateStore.css';
import DropDown from '../Shared/DropDown';
// import categories from '../mock-data/categories';
import cities from '../mock-data/cities';
import ImageSelector from '../Shared/ImageSelector';
import SubmitButton from '../Shared/SubmitButton';
import ErrorMessages from '../Shared/Classes/ErrorMessages';
import makeid from '../Shared/methods/makeid';
import fetchCategories from '../../api/categories';

const CreateStore = () => {
  const dispatch = useDispatch();
  const categoriesReducer = useSelector((state) => state.categoriesReducer);
  const categories = categoriesReducer.categories || [];
  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || {});
  const [fieldValues, setFieldValues] = useState(Array(5).fill(''));
  const [images, setImages] = useState({ urls: [], files: [] });
  const navigate = useNavigate();
  const { t } = useTranslation();

  let city = cities[0];
  let subcategory = selectedCategory.subcategories ? selectedCategory.subcategories[0] : {};
  const formValidity = Array(3).fill(false);

  const setSelectedCategoryNow = (category) => {
    setSelectedCategory(category);
  };

  const setImagesNow = (urls, files) => {
    setImages({ urls, files });
  };

  const setParentValueNow = (value, index) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = value;
    setFieldValues(newFieldValues);
  };

  const setFormValidityNow = (value, index) => {
    formValidity[index] = value;
  };

  const errors = (new ErrorMessages()).messages.images.required;

  const checkFormValidity = () => {
    if (formValidity.includes(false) || images.files.length < 1) {
      return false;
    }
    return true;
  };

  return (
    <main className="create-store-main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={createStore} className="create-store-image" alt="avatar" />
          </div>
          <div className="col-md-6 text-center">
            <h1 className="orange text-center create-store-heading">{t('createAStore')}</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              const store = {
                storeName: fieldValues[0],
                storeInfo: fieldValues[1],
                storeAddress: fieldValues[2],
                facebookLink: fieldValues[3],
                instagramLink: fieldValues[4],
                categoryId: selectedCategory.id,
                subcategoryId: subcategory.id,
                cityId: city.id,
              };
              if (checkFormValidity()) {
                navigate('/store-detail', {
                  state: store,
                });
              }
            }}
            >
              <Field
                placeholder={t('storeName')}
                type="text"
                submitted={submitted}
                setParentValue={(value) => { setParentValueNow(value, 0); }}
                setChildValue={fieldValues[0]}
                setParentFormValidity={(value) => { setFormValidityNow(value, 0); }}
              />
              <Field
                placeholder={t('storeInfo')}
                type="text"
                submitted={submitted}
                setParentValue={(value) => { setParentValueNow(value, 1); }}
                setChildValue={fieldValues[1]}
                setParentFormValidity={(value) => { setFormValidityNow(value, 1); }}
              />
              <Field
                placeholder={t('storeAddress')}
                type="text"
                submitted={submitted}
                setParentValue={(value) => { setParentValueNow(value, 2); }}
                setChildValue={fieldValues[2]}
                setParentFormValidity={(value) => { setFormValidityNow(value, 2); }}
              />
              <Field
                placeholder={t('facebookLink')}
                type="text"
                setParentValue={(value) => { setParentValueNow(value, 3); }}
                setChildValue={fieldValues[3]}
              />
              <Field
                placeholder={t('instagramLink')}
                type="text"
                setParentValue={(value) => { setParentValueNow(value, 4); }}
                setChildValue={fieldValues[4]}
              />
              <DropDown
                dropdownValues={categories || []}
                categoryName={t('category')}
                setParentValue={(value) => { setSelectedCategoryNow(value); }}
              />
              <DropDown
                dropdownValues={selectedCategory.subcategories || []}
                categoryName={t('subcategory')}
                setParentValue={(value) => { subcategory = value; }}
              />
              <DropDown
                dropdownValues={cities}
                categoryName={t('city')}
                setParentValue={(value) => { city = value; }}
              />
              <ImageSelector
                numberOfImages={5}
                setImages={(urls, files) => { setImagesNow(urls, files); }}
              />
              {images.urls && images.urls.length > 0 && (<div className="d-flex orange-border">{images.urls && images.urls.map((i) => <img className="p-2 m-2 store-images" key={makeid(10)} src={i} alt="Store" />)}</div>)}
              {submitted && images.urls.length < 1 && (<div className="text-danger text-center">{errors}</div>)}
              {submitted && !checkFormValidity() && <div className="alert alert-danger" role="alert">{t('fillInRequiredFields')}</div>}
              <div className="mt-5">
                <SubmitButton name={t('create')} />
              </div>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateStore;
