import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../pages/Home";
import Authentication from "../pages/Authentication"
import Page404 from "../pages/Page404";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Member from "../pages/Member";
import Checkout from "../pages/Checkout";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

function AppRoutes() {
    // eslint-disable-next-line no-unused-vars
    const [isAuthenticated, setAuthenticated] = useState(!!sessionStorage.getItem('token'));

    useEffect(() => {
        setAuthenticated(!!sessionStorage.getItem('token'));
    }, []);

    return (
        <Switch>
            <Route path="/catalog" component={Catalog}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path="/checkout" component={Checkout}/>
            <PrivateRoute isAuthenticated={isAuthenticated} path="/member" component={Member}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/auth" component={Authentication}/>
            <Route exact path="/" component={Home}/>
            <Route path="*" component={Page404}/>
        </Switch>
    );
}

export default AppRoutes;
