import React, { useCallback, useEffect, useMemo, useState } from 'react'

import Header from '../../components/Header/Header'
import Products from './Products/Products'
import CatalogBreadcrumbs from './Breadcrumbs/CatalogBreadcrumbs'
import Footer from '../../components/Footer/Footer'
import Filter from './Filter/Filter'

import constants from '../../constants'
import useWindowSize from '../../hooks/useWindowSize'
import { useHistory } from 'react-router-dom'
import useAsyncError from '../../hooks/useAsyncError'

import { useDispatch, useSelector } from 'react-redux';
import {
  filterOperations,
  filterSelectors
} from '../../../redux/features/filters';
import { catalogRequests, productRequests } from '../../../api/server';

import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import generateStyles from './styles'


/***
 * Closure is used to create protected variable
 *
 * @param {Number} initialValue
 * @returns {(function(Number, Number): Generator<*, void, *>)|*}
 */
function numberOfProductsGenerator(initialValue) {
  let number = initialValue;
  return function* (step, maxLength) {
    while (number <= maxLength) {
      yield (number += step)
    }
  };
}

function Catalog() {
  const [isDesktop, setDesktop] = useState(false);
  const [{ products, productsQuantity }, setProducts] = useState({});
  const [numberOfProducts, setNumberOfProducts] = useState(4);
  const [categoryName, setCategoryName] = useState('');
  const [isLoaded, setLoaded] = useState(false);

  const dispatch = useDispatch();
  const query = useSelector(filterSelectors.getFiltersQuery);

  const { width } = useWindowSize();
  const { location, replace } = useHistory();
  const throwAsyncError = useAsyncError();

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const categoryID = location.pathname
    .split('/')
    .filter((category) => category && category !== 'catalog')
    .join('-');

  /**
   * useMemo hooks are used to prevent re-renders
   */
  let generator = useMemo(
    () => numberOfProductsGenerator(numberOfProducts),
    []
  );
  generator = useMemo(
    () => generator(numberOfProducts, productsQuantity),
    [productsQuantity]
  );

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    catalogRequests.retrieveCategory(categoryID).then(
      (data) => setCategoryName(data.name),
      (error) => throwAsyncError(error)
    );
  }, [location, categoryID]);

  useEffect(() => {
    /**
     * replace method is used to store all the filters and other data in the url
     */
    replace(`${location.pathname}?${query}`);

    const additionInfoQuery = `categories=${categoryID}&perPage=${numberOfProducts}`;
    const requestQuery = query
      ? `${query}&${additionInfoQuery}`
      : additionInfoQuery;

    setLoaded(false);
    productRequests.retrieveByQuery(requestQuery).then(
      (data) => {
        setProducts(data);
        setLoaded(true);
      },
      (error) => throwAsyncError(error)
    );
  }, [query, numberOfProducts, location.pathname]);

  useEffect(() => {
    dispatch(filterOperations.getFilters(location));
  }, [location.pathname]);

  /**
   * this function increases the number of products that should be requested
   */
  const loadMoreProducts = () => {
    setNumberOfProducts(generator.next().value);
  };

  return (
    <>
      <Header />
      <Box component="main" className={classes.content}>
        <Box
          className={
            isDesktop
              ? classes.breadcrumbsContainer
              : `${classes.breadcrumbsContainer} wrapper`
          }
        >
          <CatalogBreadcrumbs
            categoryName={categoryName}
            path={location.pathname}
          />
        </Box>

        <Grid container>
          {isDesktop && (
            <>
              <Grid
                xs={isDesktop ? 3 : 0}
                item
                component="aside"
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

          <Grid xs={isDesktop ? 9 : 12} component="section" item>
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
      <Footer />
    </>
  );
}

export default Catalog;
