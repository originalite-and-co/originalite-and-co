import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import cartReducer from "./../features/cart/index";
import footerReducer from "../features/footerLinks/index";

const rootReducer = combineReducers({
    ...cartReducer,
    ...footerReducer
});

const composeEnhancers = composeWithDevTools(({
    trace: true,
}))

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;