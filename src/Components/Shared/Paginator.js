import { t } from 'i18next';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Paginator = ({ onChange, wasLastpage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button
              type="button"
              className="page-link icon-button"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  onChange(currentPage - 1);
                }
              }}
            >
              {t('previous')}
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link icon-button"
              onClick={() => {
                setCurrentPage(1); onChange(1);
              }}
            >
              1
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link icon-button"
              onClick={() => {
                setCurrentPage(2); onChange(2);
              }}
            >
              2
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link icon-button"
              onClick={() => {
                setCurrentPage(3); onChange(3);
              }}
            >
              3
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className="page-link icon-button"
              onClick={() => {
                if (!wasLastpage) {
                  setCurrentPage(currentPage + 1); onChange(currentPage + 1);
                }
              }}
            >
              {t('next')}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Paginator.propTypes = {
  onChange: PropTypes.func.isRequired,
  wasLastpage: PropTypes.bool.isRequired,
};

export default Paginator;
