import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import designReducer from './design/design';
import userReducer from './user/user';
import categoriesReducer from './categories/categories';
import subcategoriesReducer from './subcategories/subcategories';
import citiesReducer from './cities/cities';
import storesReducer from './stores/stores';
import itemsReducer from './items/items';
import homeItemsReducer from './homeItems/homeItems';
import relatedItemsReducer from './relatedItems/relatedItems';

const reducers = combineReducers({
  designReducer,
  userReducer,
  categoriesReducer,
  subcategoriesReducer,
  citiesReducer,
  storesReducer,
  itemsReducer,
  homeItemsReducer,
  relatedItemsReducer,
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
