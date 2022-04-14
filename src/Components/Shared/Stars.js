import { useState } from 'react';

import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import MaterialIcon from './MateriaIcon';
import makeid from './methods/makeid';
import postStar from '../../api/stars';

const Stars = ({ item, isInteractive }) => {
  const [postError, setPostError] = useState('');
  const dispatch = useDispatch();
  const [currentStars, setCurrentStars] = useState(item.stars
    ? { number: item.stars.number, reviewers: item.stars.reviewers }
    : { number: 0, reviewers: 0 });

  const handleClick = async (index) => {
    if (isInteractive) {
      const response = await postStar(dispatch, item, index + 1);
      if (response.status === 201) {
        setCurrentStars({ number: index + 1, reviewers: currentStars.reviewers + 1 });
      } else {
        setPostError(JSON.stringify(response.data));
      }
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
    <div>
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
        <span className="orange">{currentStars.reviewers}</span>
      </div>
      <div className="text-danger text-center">{postError}</div>
    </div>
  );
};

Stars.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  isInteractive: PropTypes.bool,
};

Stars.defaultProps = {
  isInteractive: false,
};

export default Stars;
