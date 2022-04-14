import axios from 'axios';
import jwtDecode from 'jwt-decode';
import backendURL from './baseURL';

const nullifyTokenIfExpired = (token) => {
  const nakedToken = token.split('Bearer ')[1];
  const decoded = jwtDecode(nakedToken);
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    window.location.reload();
    return null;
  }
  return token;
};

const setAxiosHeaders = () => {
  axios.defaults.baseURL = backendURL;
  let token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    token = nullifyTokenIfExpired(token);
    axios.defaults.headers.common.Authorization = token;
  } else {
    axios.defaults.headers.common.Authorization = null;
    localStorage.removeItem('user');
    localStorage.removeItem('store');
  }
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Accept = 'application/json';
  return axios;
};

export default setAxiosHeaders();
