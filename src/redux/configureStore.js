import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import designReducer from './design/design';

const reducers = combineReducers({ designReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
