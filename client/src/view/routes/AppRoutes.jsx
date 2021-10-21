import React, { useEffect, useState } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Authentication from '../pages/Authentication/Authentication';
import Page404 from '../pages/Page404/Page404';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import Member from '../pages/Member/Member';
import Checkout from '../pages/Checkout/Checkout';
import Catalog from '../pages/Catalog/Catalog';
import Cart from '../pages/Cart/Cart';
import SearchResult from '../pages/SearchResult/SearchResult';

import useAsyncError from '../hooks/useAsyncError';
import { customerRequests, pageRequests } from '../../api/server';
import StaticPage from '../components/StaticPage/StaticPage';
import {
  authorizationSelectors,
  authorizeOperations
} from '../../redux/features/authorization';
import { useDispatch, useSelector } from 'react-redux';
import ProductPage from '../pages/ProductPage/ProductPage';
import { wishlistOperations } from '../../redux/features/wishlist';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AppRoutes() {
  const dispatch = useDispatch();
  const authorization = useSelector(authorizationSelectors.authorization);
  const [isAuthenticated, setAuthenticated] = useState(
    !!sessionStorage.getItem('token') || !!localStorage.getItem('token')
  );

  const { location } = useHistory();
  const [staticPages, setStaticPages] = useState([]);

  const throwError = useAsyncError();

  useEffect(() => {
    dispatch(authorizeOperations.authorizeUser());
    dispatch(wishlistOperations.gotWishlist());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    dispatch(authorizeOperations.authorizeUser());
    setAuthenticated(
      !!sessionStorage.getItem('token') || !!localStorage.getItem('token')
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorization, isAuthenticated, location]);

  useEffect(() => {
    pageRequests.retrievePages().then(
      (data) => setStaticPages(data),
      (error) => throwError(error)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    customerRequests.retrieveCustomer().catch((error) => {
      if (error.status >= 400) {
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
      }
    });
  }, [location.pathname]);

  let staticPageRoutes;

  if (staticPages.length) {
    staticPageRoutes = staticPages.map((page) => {
      return (
        <Route
          key={page._id}
          path={page.url}
          render={(renderProps) => (
            <>
              <Header />
              <StaticPage
                title={page.title}
                htmlContent={page.htmlContent}
                {...renderProps}
              />
              <Footer />
            </>
          )}
        />
      );
    });
  }

  return (
    <Switch>
      <Route path="/products/search" component={SearchResult} />
      {staticPageRoutes}
      <Route path="/catalog/:category" component={Catalog} />
      <Route path="/products/:itemNumber" component={ProductPage} />
      <PrivateRoute
        isAuthenticated={isAuthenticated}
        path="/checkout"
        component={Checkout}
      />
      <PrivateRoute
        isAuthenticated={isAuthenticated}
        path="/member/:section"
        component={Member}
      />
      <Route path="/cart" component={Cart} />
      <Route path="/auth/:section" component={Authentication} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

export default AppRoutes;
