import backend from './backend';

export const updateUserImage = async (image) => {
  const data = new FormData();
  data.append('user[images][]', image, image.name);
  const userId = JSON.parse(localStorage.getItem('user')).id;

  try {
    const response = await backend.put(`user/${userId}/image`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateUserDetails = async (user) => {
  const userId = JSON.parse(localStorage.getItem('user')).id;

  try {
    const response = await backend.put(`user/${userId}/detail`, user);
    return response;
  } catch (err) {
    return err.response;
  }
};
