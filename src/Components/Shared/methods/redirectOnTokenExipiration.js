import jwtDecode from 'jwt-decode';

const redirectOnTokenExipiration = (navigate) => {
  setInterval(() => {
    const tokenString = localStorage.getItem('token');
    if (tokenString) {
      const parsedToken = JSON.parse(tokenString);
      const token = parsedToken.split('Bearer ')[1];
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        navigate('/log-in');
      }
    } else {
      navigate('/log-in');
    }
  }, 1000);
};

export default redirectOnTokenExipiration;
