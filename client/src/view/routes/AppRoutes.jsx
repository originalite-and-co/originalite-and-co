import React, {useState, useEffect, useCallback} from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from "../pages/Home/Home";
import Authentication from "../pages/Authentication/Authentication"
import Page404 from "../pages/Page404/Page404";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Member from "../pages/Member/Member";
import Checkout from "../pages/Checkout/Checkout";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import SearchResult from "../pages/SearchResult/SearchResult";

import useAsyncError from "../hooks/useAsyncError";
import {linkRequests, pageRequests} from "../../api/server";
import StaticPage from "../components/StaticPage/StaticPage";
import {authorizationSelectors, authorizeOperations} from "../../redux/features/authorization";
import {useDispatch, useSelector} from "react-redux";

function AppRoutes() {
    const dispatch = useDispatch()
    const authorization = useSelector(authorizationSelectors.authorization)

    const [isAuthenticated, setAuthenticated] = useState(!!sessionStorage.getItem('token') || !!localStorage.getItem("token"));

    const [staticPages, setStaticPages] = useState([]);

    const throwError = useAsyncError();


    useEffect(() => {
        dispatch(authorizeOperations.authorizeUser())
        setAuthenticated(!!sessionStorage.getItem('token') || !!localStorage.getItem("token") );
    }, [authorization]);

    // [sessionStorage.getItem('token'),localStorage.getItem("token"), isAuthenticated] - previous dependency

    useEffect(useCallback(() => {
        pageRequests.retrievePages()
            .then(
                data => setStaticPages(data),
                error => throwError(error)
            );
    }, [staticPages]), []);

    let staticPageRoutes;

    if (staticPages.length){
       staticPageRoutes = staticPages.map(page => {
           return <Route
               key={page._id}
               path={page.url}
               render={(renderProps) =>
                   <StaticPage
                       title={page.title}
                       htmlContent={page.htmlContent}
                       {...renderProps}/>}/>
       })
    }

    return (
        <Switch>
            <Route path="/products/search" component={SearchResult}/>
            {staticPageRoutes}
            <Route path="/help" render={() => <p>Loading ...</p>}/>
            <Route path="/company" render={() => <p>Loading ...</p>}/>
            <Route path="/catalog/:productId" component={Product}/>
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
