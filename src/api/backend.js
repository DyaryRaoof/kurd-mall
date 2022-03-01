import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.common.Authorization = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

export default axios;
