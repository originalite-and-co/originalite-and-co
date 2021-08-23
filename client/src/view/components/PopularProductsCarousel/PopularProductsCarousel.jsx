import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ProductCard from '../ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import { productRequests } from '../../../api/server';
import useAsyncError from '../../hooks/useAsyncError';
import Carousel, { popularProductCard } from '../Carousel';
import { Typography } from '@material-ui/core';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PopularProductsCarousel = () => {
  const { popularProductsCarousel, popularProductsSlide } = popularProductCard;
  const [productList, setProductList] = useState([]);
  const [apiError, setApiError] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);
  const throwError = useAsyncError();
  useEffect(() => {
    productRequests.retrieveProducts().then(
      (res) => setProductList(res),
      (error) => {
        throwError(error);
        setApiError(error);
      }
    );
  }, []);
  const slides = productList.map((product) => (
    <ProductCard product={product} size={12} key={product._id} />
  ));
  return (
    <div data-testid={'popular-product-carousel'} className={'carousel'}>
      <Typography component={'h4'} variant={'body2'}>
        Popular Products
      </Typography>
      <Carousel
        slides={slides}
        carouselProps={{ ...popularProductsCarousel, navigation: isDesktop }}
        slideProps={popularProductsSlide}
      />
    </div>
  );
};

export default PopularProductsCarousel;
