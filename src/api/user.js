import axios from 'axios';
import { baseUserURL } from './baseURL';

const URL = `${baseUserURL}/users/sign_in`;

export const signIn = async (user) => {
  const reponse = await axios.post(URL, user, {
    headers: {
      Accept: 'application/json',
    },
  });
  return reponse;
};

export const signUp = async (user) => {
  const reponse = await axios.post(`${baseUserURL}/users`, user, {
    headers: {
      Accept: 'application/json',
    },
  });
  return reponse;
};

export default signIn;