import PropTypes from 'prop-types';

import MaterialIcon from '../Shared/MateriaIcon';

const StoreInfoItem = ({ title, value, href }) => (
  <div className="store-info-item">
    <div className="d-flex">
      <MaterialIcon text="fiber_manual_record" orange />
      <div className="orange">{title}</div>
    </div>
    <a href={href}>
      <div className="mx-4">{value}</div>
    </a>
  </div>
);

StoreInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
};

StoreInfoItem.defaultProps = {
  href: '/#',
};

export default StoreInfoItem;
