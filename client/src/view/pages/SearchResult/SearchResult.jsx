import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Box, Typography } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  searchResultActions,
  searchResultSelectors,
} from '../../../redux/features/searchResult';
import { useHistory } from 'react-router-dom';
import { productRequests } from '../../../api/server';
import useAsyncError from '../../hooks/useAsyncError';

import _ from 'lodash';
import ProductCard from '../../components/ProductCard/ProductCard';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './SearchResultStyles.js';

const useStyles = makeStyles(generateStyles);

function SearchResult() {
  const [products, setProducts] = useState([]);
  const searchResult = useSelector(searchResultSelectors.getSearchResult);
  const throwAsyncError = useAsyncError();
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();

  const query = history.location.search.slice(
    Number(history.location.search.indexOf('=')) + 1,
  );

  if (searchResult.length && !products.length) {
    setProducts(searchResult);
  }

  if (!searchResult.length && !products.length) {
    productRequests.searchForProduct(_.lowerCase(query)).then(
      (data) => {
        setProducts(data);
        if (data.length) {
          dispatch(searchResultActions.setSearchResult(data));
        }
      },
      (error) => throwAsyncError(error),
    );
  }

  const productList = products.map((product) => {
    return <ProductCard key={product._id} product={product} size={6} />;
  });

  return (
    <>
      <Header />
      <Box component="main" className={`${classes.content} wrapper`}>
        <Box component="section">
          <Typography
            component="h3"
            variant="h5"
            color="textSecondary"
            className={classes.heading}
          >
            {_.upperFirst(_.lowerCase(query))}
          </Typography>
          <Box className={classes.grid}>{productList}</Box>
        </Box>
      </Box>
    </>
  );
}

export default SearchResult;
