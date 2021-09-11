import React, { useEffect, useState } from 'react';

import CategoryCard from '../../../components/CategoryCard/CategoryCard';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

import { catalogRequests } from '../../../../api/server';
import useAsyncError from '../../../hooks/useAsyncError';

const ShopCategories = () => {
  const [categoryList, setCategoryList] = useState([]);

  const throwError = useAsyncError();

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  useEffect(() => {
    catalogRequests.retrieveCatalog().then(
      (res) => setCategoryList(res.splice(0, 4)),
      (error) => throwError(error)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gridArea = ['men', 'women', 'kids', 'outwear'];
  const list = categoryList.map((product, index) => {
    return (
      <CategoryCard
        gridArea={gridArea[index]}
        product={product}
        key={product._id}
      />
    );
  });

  return (
    <Box className={classes.root}>
      <Typography
        color="textPrimary"
        component="h3"
        variant="body2"
        className={classes.heading}
      >
        Shop by Category
      </Typography>
      <Box className={classes.categoryWrapper}>{list}</Box>
    </Box>
  );
};

export default ShopCategories;
