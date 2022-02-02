import { useState } from 'react';
import PropTypes from 'prop-types';
import './DropDown.css';

const DropDown = ({
  categoryName, dropdownValues, setSelectedCategory, submitted,
}) => {
  const [currentCategory, setCurrentCategory] = useState(null);

  return (
    <div>
      <div className="dropdown">
        <button className="btn border border-1 border-secondary dropdown-toggle form-control my-3 p-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Select
          {' '}
          {categoryName}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {dropdownValues.map((value) => (
            <li key={value.id}>
              <button
                className="dropdown-item icon-button"
                type="button"
                onClick={() => {
                  if (categoryName === 'Category') {
                    setSelectedCategory(value);
                  }
                  setCurrentCategory(value);
                }}
              >
                {value.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {!currentCategory && submitted && (<div className="text-danger text-center">{`You Select A ${categoryName}`}</div>)}
    </div>
  );
};

DropDown.protoTypes = {
};

DropDown.propTypes = {
  categoryName: PropTypes.string.isRequired,
  dropdownValues: PropTypes.instanceOf(Array).isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default DropDown;
