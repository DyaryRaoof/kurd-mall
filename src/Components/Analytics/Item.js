import PropTypes from 'prop-types';

const Item = ({ name, value }) => (
  <div className="d-flex">
    <p className="orange">{name}</p>
    <span className="px-2">{value}</span>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Item;
