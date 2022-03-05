import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
const token = JSON.parse(localStorage.getItem('token'));
if (token) {
  axios.defaults.headers.common.Authorization = token;
} else {
  axios.defaults.headers.common.Authorization = null;
}
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export default axios;
