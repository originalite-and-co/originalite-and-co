import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './../features/cart/index';
import isAnyDropdownOpenReducer from './../features/dropdown/index';
import searchResult from './../features/searchResult/index';
import footerReducer from './../features/footerLinks/index';
import filterReducer from './../features/filters/index';
import authorizationReducer from '../features/authorization/index';

const rootReducer = combineReducers({
  ...cartReducer,
  ...isAnyDropdownOpenReducer,
  ...searchResult,
  ...footerReducer,
  ...filterReducer,
  ...footerReducer,
  ...authorizationReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
