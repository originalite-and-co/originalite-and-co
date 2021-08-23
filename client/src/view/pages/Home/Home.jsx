import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PopularProductsCarousel from './PopularProductsCarousel/PopularProductsCarousel';
import ShopCategories from './ShopCategories/ShopCategories';
import PromoCarousel from './PromoCarousel/PromoCarousel';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

function Home() {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.content} component={'main'}>
        <PromoCarousel />
        <Box className={`${classes.sectionWrapper} wrapper`}>
          <PopularProductsCarousel />
          <ShopCategories />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
