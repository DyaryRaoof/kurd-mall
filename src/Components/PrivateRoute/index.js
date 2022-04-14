import {
  Navigate, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return element;
  }

  return <Navigate to="/log-in" replace state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  element: PropTypes.instanceOf(Object).isRequired,
};

export default PrivateRoute;
