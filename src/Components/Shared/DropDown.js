import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './DropDown.css';

const DropDown = ({
  categoryName, dropdownValues, bgColorClass, setParentValue,
}) => {
  const [currentCategory, setCurrentCategory] = useState(dropdownValues[0]);
  const { t } = useTranslation();

  return (
    <div>
      <div className="dropdown">
        <button className={`${bgColorClass} btn border border-1 border-secondary dropdown-toggle form-control my-3 p-3`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {currentCategory ? currentCategory.name
            : (
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
                {value.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

DropDown.protoTypes = {
};

DropDown.propTypes = {
  categoryName: PropTypes.string.isRequired,
  dropdownValues: PropTypes.instanceOf(Array).isRequired,
  bgColorClass: PropTypes.string,
  setParentValue: PropTypes.func,
};

DropDown.defaultProps = {
  bgColorClass: '',
  setParentValue: () => { },
};

export default DropDown;
