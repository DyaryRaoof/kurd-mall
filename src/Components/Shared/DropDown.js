import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './DropDown.css';

const DropDown = ({
  categoryName, dropdownValues, bgColorClass, setParentValue, currentValue,
}) => {
  const [currentCategory, setCurrentCategory] = useState(currentValue);
  const { t } = useTranslation();
  const language = localStorage.getItem('language');

  const categoryValue = () => {
    if (currentCategory === null) {
      return null;
    }
    if (language === 'en') {
      return currentCategory.name_en;
    }
    return currentCategory.name_ku;
  };

  return (
    <div>
      <div className="dropdown">
        <button className={`${bgColorClass} btn border border-1 border-secondary dropdown-toggle form-control my-3 p-3`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {currentCategory ? categoryValue() : (
            <span>
              {t('select')}
              {' '}
              {categoryName}
            </span>
          )}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {dropdownValues.map((value) => (
            <li key={value.id}>
              <button
                className="dropdown-item icon-button"
                type="button"
                onClick={() => {
                  setCurrentCategory(value);
                  setParentValue(value);
                }}
              >
                {language === 'en' ? value.name_en : value.name_ku}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  categoryName: PropTypes.string.isRequired,
  dropdownValues: PropTypes.instanceOf(Array).isRequired,
  bgColorClass: PropTypes.string,
  setParentValue: PropTypes.func,
  currentValue: PropTypes.instanceOf(Object),
};

DropDown.defaultProps = {
  bgColorClass: '',
  setParentValue: () => { },
  currentValue: null,
};

export default DropDown;
