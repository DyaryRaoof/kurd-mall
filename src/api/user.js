import axios from 'axios';
import baseURL from './baseURL';

const URL = `${baseURL}users/sign_in`;

export const signInUser = async (user) => {
  try {
    const reponse = await axios.post(URL, user, {
      headers: {
        Accept: 'application/json',
      },
    });
    return reponse;
  } catch (err) {
    return err.response;
  }
};

export const signUpUser = async (user) => {
  const data = new FormData();
  data.append('user[images][]', user.image, user.image.name);
  data.append('user[name]', user.name);
  data.append('user[email]', user.email);
  data.append('user[phone]', user.phone);
  data.append('user[password]', user.password);
  data.append('user[password_confirmation]', user.password_confirmation);
  data.append('user[city_id]', user.cityId);

  try {
    const response = await axios.post(`${baseURL}users`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export default signInUser;
