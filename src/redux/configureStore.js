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
import myStoreReducer from './myStore/myStores';
import myItemsReducer from './myItems/myItems';
import searchItemsReducer from './searchItems/searchItems';
import searchStoresReducer from './searchStores/searchStores';
import getCartItemsReducer from './getCartItems/getCartItems';
import buyItemsReducer from './buyItems/buyItems';
import getMyBoughtOrdersReducer from './getMyBoughtOrders/getMyBoughtOrders';
import storeItemsReducer from './storeItems/storeItems';
import driverOrdersReducer from './driverOrders/driverOrders';
import allOrdersReducer from './allOrders/allOrders';

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
  myStoreReducer,
  myItemsReducer,
  searchItemsReducer,
  searchStoresReducer,
  getCartItemsReducer,
  buyItemsReducer,
  getMyBoughtOrdersReducer,
  storeItemsReducer,
  driverOrdersReducer,
  allOrdersReducer,
});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
