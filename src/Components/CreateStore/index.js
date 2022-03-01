import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../Shared/Field';
import createStore from '../../images/design/create-store.png';
import './CreateStore.css';
import DropDown from '../Shared/DropDown';
// import categories from '../mock-data/categories';
// import cities from '../mock-data/cities';
import ImageSelector from '../Shared/ImageSelector';
import SubmitButton from '../Shared/SubmitButton';
import ErrorMessages from '../Shared/Classes/ErrorMessages';
import makeid from '../Shared/methods/makeid';
import fetchCategories from '../../api/categories';
import fetchSubcategories from '../../api/subcategories';
import redirectOnTokenExipiration from '../Shared/methods/redirectOnTokenExipiration';
import fetchCities from '../../api/cities';
import postStore from '../../api/stores';

const CreateStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [returnedErrors, setReturnedErrors] = useState(null);
  const categories = useSelector((state) => state.categoriesReducer.categories) || [];
  const subcategories = useSelector((state) => state.subcategoriesReducer.subcategories) || [];
  const cities = useSelector((state) => state.citiesReducer.cities) || [];

  useEffect(() => {
    dispatch(fetchCategories);
    fetchSubcategories(dispatch, 0);
    dispatch(fetchCities);
    redirectOnTokenExipiration();
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fieldValues, setFieldValues] = useState(Array(5).fill(''));
  const [images, setImages] = useState({ urls: [], files: [] });
  const { t } = useTranslation();

  const [subcategory, setSubcategory] = useState(null);
  const [city, setCity] = useState(null);

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
    if (formValidity.includes(false)
      || images.files.length < 1
      || !selectedCategory.id
      || !city
      || !subcategory) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (checkFormValidity()) {
      const store = {
        name: fieldValues[0],
        description: fieldValues[1],
        address: fieldValues[2],
        facebook: fieldValues[3],
        instagram: fieldValues[4],
        category_id: selectedCategory.id,
        subcategory_id: subcategory.id,
        city_id: city.id,
      };
      const response = await postStore(dispatch, store, images.files);
      if (response.status === 201) {
        navigate('/store-detail', {
          state: store,
        });
      } else {
        setReturnedErrors(JSON.stringify(response.data));
      }
    }
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
              handleSubmit(e);
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
                dropdownValues={
                  selectedCategory
                    ? subcategories
                      .filter((sub) => sub.category_id === selectedCategory.id) || [] : []
                }
                categoryName={t('subcategory')}
                setParentValue={(value) => { setSubcategory(value); }}
              />
              <DropDown
                dropdownValues={cities}
                categoryName={t('city')}
                setParentValue={(value) => { setCity(value); }}
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

              {returnedErrors && <div className="alert alert-danger text-center">{returnedErrors}</div>}

            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateStore;
