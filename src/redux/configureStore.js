import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import designReducer from './design/design';
import userReducer from './user/user';
import categoriesReducer from './categories/categories';
import subcategoriesReducer from './subcategories/subcategories';
import citiesReducer from './cities/cities';
import storesReducer from './stores/stores';

const reducers = combineReducers({
  designReducer, userReducer, categoriesReducer, subcategoriesReducer, citiesReducer, storesReducer,
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
