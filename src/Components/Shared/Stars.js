import { PropTypes } from 'prop-types';
import MaterialIcon from './MateriaIcon';

const Stars = ({ number, users }) => (
  <div className="d-flex">
    <div className="d-flex">

      {[...Array(5).keys()].map((a) => {
        if (a < number) {
          return (
            <MaterialIcon key={a} text="star" orange />
          );
        }
        return (
          <MaterialIcon key={a} text="star" orange={false} />
        );
      })}
      {' '}
    </div>
    <span className="orange">{users}</span>
  </div>
);

Stars.propTypes = {
  number: PropTypes.number.isRequired,
  users: PropTypes.number.isRequired,
};

export default Stars;
