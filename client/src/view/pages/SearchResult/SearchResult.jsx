import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Box, Grid, Typography } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { searchResultActions, searchResultSelectors } from '../../../redux/features/searchResult';
import { useHistory } from 'react-router-dom';
import { productRequests } from '../../../api/server';
import useAsyncError from '../../hooks/useAsyncError';

import _ from 'lodash';
import ProductCard from '../../components/ProductCard/ProductCard';

function SearchResult() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const searchResult = useSelector(searchResultSelectors.getSearchResult);
  const throwAsyncError = useAsyncError();
  const history = useHistory();
  const dispatch = useDispatch();

  const query = history.location.search
    .slice(Number(history.location.search.indexOf('=')) + 1);

  if (searchResult.length && !products.length) {
    setLoaded(false);
    setProducts(searchResult);
  }

  if (!searchResult.length && !products.length) {
    productRequests.searchForProduct({ query })
      .then(
        data => {
          setProducts(data);
          setLoaded(true);
          if (data.length) {
            dispatch(searchResultActions.setSearchResult(data));
          }
        },
        error => throwAsyncError(error),
      );
  }


  if (!isLoaded) {
    return <p>Loading ...</p>;
  }

  const productList = products.map(product => {
    return (
      <ProductCard key={product._id} product={product} size={4}/>
    );
  });
  return (
    <>
      <Header />
      <Box component='main'>
        <Box sx={{
          fontSize: '48px',
          color: 'red',
          margin: '20px',
        }} component='section'>
          <Typography component='h3' variant='h5'>
            {_.upperFirst(query)}
          </Typography>
          <Grid
            container
            component="ul"
          >
            {productList}
          </Grid>
        </Box>
      </Box>

    </>
  );
}

export default SearchResult;