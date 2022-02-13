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
  return (
    <div className="d-flex">
      <div className="d-flex">

        {[...Array(5).keys()].map((a, index) => {
          if (a < currentStars.number) {
            return (
              <button key={makeid} type="button" className="icon-button" onClick={() => handleClick(index)}>
                <MaterialIcon text="star" orange />
              </button>
            );
          }
          return (
            <button key={makeid} type="button" className="icon-button" onClick={() => handleClick(index)}>
              <MaterialIcon text="star" orange={false} />
            </button>
          );
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
