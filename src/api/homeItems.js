import backend from './backend';
import { getHomeItemSuccess, getHomeItemFailure } from '../redux/homeItems/homeItems';
import { showSpinnerModal } from '../redux/design/design';

const getHomeItems = async (dispatch, subcategoryIds, replaceItems) => {
  try {
    dispatch(showSpinnerModal(true));
    const response = await backend.get(`items/home_index?subcategory_ids=${JSON.stringify(subcategoryIds)}`);
    const pureData = response.data.data.map((d) => d.attributes);
    dispatch(getHomeItemSuccess({ items: pureData, replaceItems }));
    dispatch(showSpinnerModal(false));
    return response;
  } catch (err) {
    dispatch(getHomeItemFailure(JSON.stringify(err.response.data)));
    return err.response;
  }
};

export default getHomeItems;
