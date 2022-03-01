import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import designReducer from './design/design';
import userReducer from './user/user';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({ designReducer, userReducer, categoriesReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
