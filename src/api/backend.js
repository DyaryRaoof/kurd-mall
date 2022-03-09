import axios from 'axios';

const setAxiosHeaders = () => {
  axios.defaults.baseURL = 'http://localhost:3001/';
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token, 'token');
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    axios.defaults.headers.common.Authorization = null;
  }
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Accept = 'application/json';
  return axios;
};

export default setAxiosHeaders();
