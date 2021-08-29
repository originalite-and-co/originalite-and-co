import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './../features/cart/index';
import isAnyDropdownOpenReducer from './../features/dropdown/index';
import searchResult from './../features/searchResult/index';
import footerReducer from './../features/footerLinks/index';
import filterReducer from './../features/filters/index';
import authorizationReducer from '../features/authorization/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

let rootReducer = combineReducers({
  ...cartReducer,
  ...isAnyDropdownOpenReducer,
  ...searchResult,
  ...footerReducer,
  ...filterReducer,
  ...footerReducer,
  ...authorizationReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  trace: true
});

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default { store, persistor };
