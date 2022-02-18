import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import designReducer from './design/design';
import userReducer from './user/user';

const reducers = combineReducers({ designReducer, userReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
