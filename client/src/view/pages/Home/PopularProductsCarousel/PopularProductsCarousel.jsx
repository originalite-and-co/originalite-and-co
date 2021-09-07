import React, { useEffect, useState } from 'react';

import ProductCard from '../../../components/ProductCard/ProductCard';
import Carousel, { popularProductCard } from '../../../components/Carousel';

import useAsyncError from '../../../hooks/useAsyncError';
import useWindowSize from '../../../hooks/useWindowSize';

import { Box, Typography } from '@material-ui/core';
import generateStyles from './styles';
import { makeStyles } from '@material-ui/styles';

import { productRequests } from '../../../../api/server';
import constants from '../../../constants';

const PopularProductsCarousel = () => {
  const [productList, setProductList] = useState([]);

  const { width } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(
    width >= constants.WINDOW_DESKTOP_SIZE
  );

  const throwError = useAsyncError();
  const {
    popularProductsCarousel,
    popularProductsSlide,
    useStyles: useCarouselStyles
  } = popularProductCard;

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const carouselClasses = useCarouselStyles();

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    productRequests.retrieveProducts().then(
      (res) => setProductList(res),
      (error) => throwError(error)
    );
  }, []);

  const slides = productList.map((product) => (
    <ProductCard product={product} size={12} key={product._id} />
  ));

  return (
    <Box
      component="section"
      data-testid="popular-product-carousel"
      className={`${classes.root} ${carouselClasses.root}`}
    >
      <Typography
        component="h3"
        color="textPrimary"
        variant="body2"
        className={classes.heading}
      >
        Popular Products
      </Typography>
      <Carousel
        slides={slides}
        carouselProps={{ ...popularProductsCarousel, navigation: isDesktop }}
        slideProps={popularProductsSlide}
      />
    </Box>
  );
};

export default PopularProductsCarousel;
