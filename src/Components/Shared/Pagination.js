import PropTypes from 'prop-types';

const Pagination = ({
  onPageChange,
  currentPage,
  totalPages,
}) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link" type="button" aria-label="Previous" onClick={currentPage < totalPages ? () => { onPageChange(currentPage - 1); } : null}>
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only ms-2">Previous</span>
        </button>
      </li>
      <li className="page-item"><a className="page-link" href="/#">1</a></li>
      <li className="page-item"><a className="page-link" href="/#">2</a></li>
      <li className="page-item"><a className="page-link" href="/#">3</a></li>
      <li className="page-item">
        <button className="page-link" type="button" aria-label="Next" onClick={currentPage < totalPages ? () => { onPageChange(currentPage + 1); } : null}>
          <span className="sr-only me-2">Next</span>
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
);

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
