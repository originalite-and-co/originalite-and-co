import React, { useEffect, useMemo, useState } from 'react';
import Carousel, { viewedProduct } from '../../../components/Carousel';
import ProductCard from '../../ProductCard/ProductCard';
import { Box } from '@material-ui/core';
import { productRequests } from '../../../../api/server';
import useAsyncError from '../../../hooks/useAsyncError';
import Loader from '../../Loader/Loader';

function ViewedProducts({ activeProductNumber }) {
  const [viewed, setIsViewed] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const throwAsyncError = useAsyncError();
  const { slideViewedProduct, carouselViewedProduct, useStylesViewedProduct } =
    viewedProduct;
  const classes = useStylesViewedProduct();

  useEffect(() => {
    setIsLoaded(false);
    const viewedProducts =
      JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    if (!viewedProducts.length) {
      setIsLoaded(true);
      return;
    }
    const itemNumbers = viewedProducts.map((item) => item.itemNo);
    productRequests.retrieveProductsByItemNumbers(itemNumbers).then(
      (res) => {
        setIsLoaded(true);
        setIsViewed(res);
      },
      (error) => throwAsyncError(error)
    );
  }, []);

  if (!isLoaded) {
    return <Loader fixed />;
  }
  const slides = viewed?.map((product) => {
    return <ProductCard product={product} key={product._id} />;
  });

  return (
    <Box className={classes.headerCarousel}>
      <Carousel
        slides={slides}
        slideProps={slideViewedProduct}
        carouselProps={carouselViewedProduct}
      />
    </Box>
  );
}

export default ViewedProducts;
