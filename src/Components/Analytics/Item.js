import PropTypes from 'prop-types';

const Item = ({ name, value }) => (
  <div className="d-flex">
    <p className="orange">{name}</p>
    <span>{value}</span>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Item;
