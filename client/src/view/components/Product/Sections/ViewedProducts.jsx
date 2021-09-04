import React, {useEffect, useState} from 'react';
import Carousel, {viewedProduct} from '../../../components/Carousel';
import ProductCard from "../../ProductCard/ProductCard";
import {Box} from "@material-ui/core";

<<<<<<< HEAD
function ViewedProducts() {
  return <div></div>;
=======
function ViewedProducts ({activeProductNumber}) {

  const [viewed, setIsViewed] = useState([])

  const { slideViewedProduct, carouselViewedProduct, useStylesViewedProduct } = viewedProduct;
  const classes = useStylesViewedProduct();

  useEffect(() => {
    const viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || []
    setIsViewed(viewedProducts.filter(item => {
      return item.itemNo !== activeProductNumber
    }))
  },[])

  const slides = viewed.map((product) => (
      <ProductCard product={product} size={6} key={product._id} />));

  return (
      <Box className={classes.headerCarousel}>
        <Carousel
            slides={slides}
            slideProps={slideViewedProduct}
            carouselProps={carouselViewedProduct}
        />
      </Box>
  )
>>>>>>> origin/develop
}

export default ViewedProducts;
