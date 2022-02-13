const SET_NAV_STORE_OR_ITEM = 'kurd-mall/design/SET_NAV_STORE_OR_ITEM';

const initialState = { navStoreOrItem: 'item' };

export const setNavStoreOrItem = (payload) => ({
  type: SET_NAV_STORE_OR_ITEM,
  payload,
});

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_STORE_OR_ITEM:
      return { ...state, navStoreOrItem: action.payload };
    default:
      return state;
  }
};

export default designReducer;
