import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@material-ui/core';
import classes from './Catalog.module.scss';
import Filter from './Filter/Filter';
import Header from '../../components/Header/Header';
import { filterOperations, filterSelectors } from '../../../redux/features/filters';
import { useDispatch, useSelector } from 'react-redux';
import { catalogRequests, productRequests } from '../../../api/server';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';
import { useHistory } from 'react-router-dom';

import _ from 'lodash';
import Products from './Products/Products';
import CatalogBreadcrumbs from './Breadcrumbs/CatalogBreadcrumbs';
import { useTheme } from '@material-ui/styles';
import Footer from '../../components/Footer/Footer';
import useAsyncError from '../../hooks/useAsyncError';

Catalog.propTypes = {};


function numberOfProductsGenerator(init) {
  let number = init;
  return function* (step, maxLength) {
    while (true) {
      yield number += step;
    }
  };
}

function Catalog(props) {
  const [isDesktop, setDesktop] = useState(false);
  const [{ products, productsQuantity }, setProducts] = useState({});
  const [numberOfProducts, setNumberOfProducts] = useState(2);
  const [categoryName, setCategoryName] = useState("");
  const [isLoaded, setLoaded] = useState(false);

  const dispatch = useDispatch();
  const query = useSelector(filterSelectors.getFiltersQuery);
  const throwAsyncError = useAsyncError();

  const { width } = useWindowSize();
  const { location, replace } = useHistory();

  const categoryID = location.pathname
    .split('/')
    .filter(category => category && category !== 'catalog')
    .join('-');

  const generator = numberOfProductsGenerator(numberOfProducts);
  const test = generator(2, productsQuantity);

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    catalogRequests.retrieveCategory(categoryID)
      .then(
        data => setCategoryName(data.name),
        error => throwAsyncError(error)
      )
  }, [location, categoryID])

  useEffect(() => {
    replace(`${location.pathname}?${query}`);
    const requestQuery = query ?
      `${query}&categories=${categoryID}&perPage=${numberOfProducts}` :
      `categories=${categoryID}&perPage=${numberOfProducts}`;
    setLoaded(false)
    productRequests.retrieveByQuery(requestQuery)
      .then(
        data => {
          setProducts(data)
          setLoaded(true)
        },
        error => throwAsyncError(error)
        );
  }, [query, numberOfProducts, location.pathname]);

  useEffect(() => {
    dispatch(filterOperations.getFilters(location));
  }, [location.pathname]);

  const loadMoreProducts = () => {
    setNumberOfProducts(test.next().value);
  };

  return (
    <>
      <Header />
      <Box
        component='main'
        className={classes.content}
      >

        <Box
          className={isDesktop ?
            classes.breadcrumbsContainer :
            `${classes.breadcrumbsContainer} wrapper`}>
            <CatalogBreadcrumbs categoryName={categoryName} path={location.pathname} />
        </Box>

        <Grid container>
          {isDesktop && (
            <>
              <Grid
                xs={isDesktop ? 3 : 0}
                item
                component='aside'
                className={classes.filter}
              >
                <Box className={classes.filterContentWrapper}>
                  <Box className={classes.filterContentInner}>
                    <Filter />
                  </Box>
                </Box>
              </Grid>
            </>
          )}
          <Grid
            xs={isDesktop ? 9 : 12}
            component='section'
            item
          >
            <Box className={classes.productListWrapper}>
              <Products
                isLoaded={isLoaded}
                products={products}
                productsQuantity={productsQuantity}
                categoryTitle={categoryName}
                loadMoreProducts={loadMoreProducts}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </>
  );
}

export default Catalog;