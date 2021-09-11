import React, { useState, useEffect, useCallback } from 'react';

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
import Email from '../components/Email/Email';
import * as ReactDOMServer from 'react-dom/server';

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
  }, [location]);

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

  const products = [
    {
      image:
        'https://res.cloudinary.com/originalite-and-co/image/upload/v1629556260/omar-tursic-mfoH7-IPaBI-unsplash_fjvhrv.jpg',
      size: 'l',
      color: 'blue',
      _id: '6121109571bb3347ae905f2b',
      name: 'jacket',
      price: 400,
      quantity: 3
    },
    {
      image:
        'https://res.cloudinary.com/originalite-and-co/image/upload/v1629556257/marcus-p-I45yxLNWHaY-unsplash_pzspmi.jpg',
      size: 'm',
      _id: '612110aa71bb3347ae905f2e',
      name: 'jacket',
      price: 140,
      color: 'black',
      quantity: 2
    }
  ];

  const email = <Email products={products} total={540} orderNumber={654559} />;
  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify({
      letterHtml: ReactDOMServer.renderToString(email)
    })
  );
  return (
    <Switch>
      <Route path="/email">{email}</Route>
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
      <Route path="/auth" component={Authentication} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

export default AppRoutes;
