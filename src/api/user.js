import axios from 'axios';
import { baseUserURL } from './baseURL';

const URL = `${baseUserURL}users/sign_in`;

export const signInUser = async (user) => {
  const reponse = await axios.post(URL, user, {
    headers: {
      Accept: 'application/json',
    },
  });
  return reponse;
};

export const signUpUser = async (user) => {
  try {
    const response = await axios.post(`${baseUserURL}users`, user, {
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
