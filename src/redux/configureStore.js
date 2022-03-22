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
import starsReducer from './stars/stars';
import commentsReducer from './comments/comments';
import detailCommentsReducer from './detailComments/detailComments';
import storeDetailReducer from './storeDetail/storeDetail';
import homeStoresReducer from './homeStores/homeStores';
import allItemsReducer from './allItems/allItems';
import allStoresReducer from './allStores/allStores';

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
  starsReducer,
  commentsReducer,
  detailCommentsReducer,
  storeDetailReducer,
  homeStoresReducer,
  allItemsReducer,
  allStoresReducer,
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
