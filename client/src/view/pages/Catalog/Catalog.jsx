import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@material-ui/core';
import classes from './Catalog.module.scss';
import Filter from './Filter/Filter';
import Header from '../../components/Header/Header';
import { filterOperations, filterSelectors } from '../../../redux/features/filters';
import { useDispatch, useSelector } from 'react-redux';
import { productRequests } from '../../../api/server';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';
import { useHistory } from 'react-router-dom';

import _ from 'lodash';
import Products from './Products/Products';
import CatalogBreadcrumbs from './Breadcrumbs/CatalogBreadcrumbs';

Catalog.propTypes = {};


function numberOfProductsGenerator(init) {
  let number = init;
  return function* (step) {
    while (true) {
      yield number += step;
    }
  };
}

function Catalog(props) {
  const [isDesktop, setDesktop] = useState(false);
  const [{ products, productsQuantity }, setProducts] = useState([]);
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const dispatch = useDispatch();
  const query = useSelector(filterSelectors.getFiltersQuery);

  const { width } = useWindowSize();
  const { location, replace } = useHistory();

  const categoryName = location.pathname.split('/').pop();
  const categoryTitle = _.upperFirst(_.lowerCase(categoryName));

  let generator = () => numberOfProductsGenerator(numberOfProducts);
  const test = generator(1);
  // console.log(test.next().value);


  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  const categoryID = location.pathname
    .split('/')
    .filter(category => category && category !== 'catalog')
    .join('-');


  useEffect(() => {
    replace(`${location.pathname}?${query}`);

    const requestQuery = query ?
      `${query}&categories=${categoryID}&perPage=${numberOfProducts}` :
      `categories=${categoryID}}&perPage=${numberOfProducts}`;

    productRequests.retrieveByQuery(requestQuery)
      .then(data => {
        setProducts(data);
      });
  }, [query]);

  useEffect(() => {
    dispatch(filterOperations.getFilters(location));
  }, [location.pathname]);

  const loadMoreProducts = () => {
    debugger
    console.log(test.next().value);
    return test.next().value;
  };

  return (
    <>
      <Header />
      <Grid
        container
        component='main'
        className={classes.content}
      >
        {isDesktop && (
          <>
            <Grid
              item
              xs={12}
              className={`${classes.breadcrumbsContainer} wrapper`}
            >
              <CatalogBreadcrumbs path={location.pathname} />
            </Grid>
            <Grid
              xs={isDesktop ? 3 : 0}
              item
              component='aside'
              className={classes.filter}
            >
              <Box className={classes.filterInner}>
                <Filter />
              </Box>
            </Grid>
          </>
        )}
        <Grid
          xs={isDesktop ? 9 : 12}
          component='section'
          item
        >
          <Box className={classes.contentInner}>
            <Products
              products={products}
              categoryTitle={categoryTitle}
              loadMoreProducts={loadMoreProducts}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Catalog;