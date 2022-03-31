import backend from './backend';
import { getSingleItemSuccess, getSingleItemFailure } from '../redux/singleItem/singleItem';

const getSingleItem = async (dispatch, id) => {
  try {
    const response = await backend.get(`item?id=${id}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getSingleItemSuccess(pureData[0]));
    return response;
  } catch (err) {
    dispatch(getSingleItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getSingleItem;
