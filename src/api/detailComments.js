import backend from './backend';
import { gettDetailCommentsLoading, getDetailCommentsSuccess, getDetailCommentsFailure } from '../redux/detailComments/detailComments';

const getDetailComments = async (dispatch, itemId, page) => {
  try {
    dispatch(gettDetailCommentsLoading());
    const response = await backend.get(`comments?item_id=${itemId}&page=${page}`);
    dispatch(getDetailCommentsSuccess(response.data));
    return response;
  } catch (err) {
    dispatch(getDetailCommentsFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getDetailComments;
