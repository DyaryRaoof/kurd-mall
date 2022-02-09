import PropTypes from 'prop-types';

import MaterialIcon from '../Shared/MateriaIcon';

const StoreInfoItem = ({ title, value }) => (
  <div className="store-info-item">
    <div className="d-flex">
      <MaterialIcon text="fiber_manual_record" orange />
      <div className="orange">{title}</div>
    </div>
    <div className="mx-4">{value}</div>
  </div>
);

StoreInfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StoreInfoItem;
