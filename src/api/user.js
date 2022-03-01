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
  try {
    const response = await axios.post(`${baseURL}users`, user, {
      headers: {
        Accept: 'application/json',
      },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export default signInUser;
