const SET_USER = 'kurd-mall/user/SET_USER';

const initialState = { user: { storeId: '' } };

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
