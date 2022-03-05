import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PropTypes from 'prop-types';
import makeid from './methods/makeid';

const CurrencyDropdown = ({ setParentValue }) => {
  const { t } = useTranslation();
  const dropdownValues = ['IQD', 'USD'];
  const [currentCurrency, setCurrentCurrency] = useState(null);

  const setCurrencyLanguage = (currency) => {
    if (currency === 'IQD') {
      return t('iqd');
    }
    return t('usd');
  };

  return (
    <div>
      <div className="dropdown">
        <button className="bg-warning btn border border-1 border-secondary dropdown-toggle form-control my-3 p-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {currentCurrency ? setCurrencyLanguage(currentCurrency) : (
            <span>
              {t('select')}
              {' '}
              {t('currency')}
            </span>
          )}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {dropdownValues.map((value) => (
            <li key={makeid(10)}>
              <button
                className="dropdown-item icon-button"
                type="button"
                onClick={() => {
                  setParentValue(value);
                  setCurrentCurrency(value);
                }}
              >
                {setCurrencyLanguage(value)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CurrencyDropdown.propTypes = {
  setParentValue: PropTypes.func.isRequired,
};

export default CurrencyDropdown;
