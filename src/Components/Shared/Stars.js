import { useState } from 'react';

import { PropTypes } from 'prop-types';
import MaterialIcon from './MateriaIcon';
import makeid from './methods/makeid';

const Stars = ({ number, users, isInteractive }) => {
  const [currentStars, setCurrentStars] = useState({ number, users });

  const handleClick = (index) => {
    if (isInteractive) {
      setCurrentStars({ number: index + 1, users: users + 1 });
    }
  };

  const createStar = (isOrange, index) => {
    if (isInteractive) {
      return (
        <button key={makeid(10)} type="button" className="icon-button" onClick={() => handleClick(index)}>
          <MaterialIcon text="star" orange={isOrange} />
        </button>
      );
    }
    return <MaterialIcon key={makeid(10)} text="star" orange />;
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex">

        {[...Array(5).keys()].map((a, index) => {
          if (a < currentStars.number) {
            return createStar(true, index);
          }
          return createStar(false, index);
        })}
        {' '}
      </div>
      <span className="orange">{currentStars.users}</span>
    </div>
  );
};

Stars.propTypes = {
  number: PropTypes.number.isRequired,
  users: PropTypes.number.isRequired,
  isInteractive: PropTypes.bool,
};

Stars.defaultProps = {
  isInteractive: false,
};

export default Stars;
