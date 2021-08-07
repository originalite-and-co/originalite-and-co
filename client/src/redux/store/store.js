import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import cartReducer from "./../features/cart/index";
import modalReducer from './../features/modal/index';
import searchResult from "./../features/searchResult/index";


const rootReducer = combineReducers({
    ...cartReducer,
    ...modalReducer,
    ...searchResult
});

const composeEnhancers = composeWithDevTools(({
    trace: true,
}))

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;