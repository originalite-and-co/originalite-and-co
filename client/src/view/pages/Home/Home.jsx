import React, { useEffect, useState, useMemo } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Image from '../../components/Image';
import CardList from '../../components/CardList/CardList.jsx';
import ShopCategories from '../../components/ShopCategories/ShopCategories';
import { Box } from '@material-ui/core';
import PopularProductsCarousel from '../../components/PopularProductsCarousel/PopularProductsCarousel';

import Carousel, { defaultCarousel } from '../../components/Carousel';
import { sliderRequests } from '../../../api/server';
import CarouselStyle from './styles/style';
import classes from './Home.module.scss';

function Home() {
  const PromoCarouselStyle = CarouselStyle();
  const { slide, carousel } = defaultCarousel;
  const [slides, setSlides] = useState([]);

  const imagesComp = useMemo(
    () =>
      slides.map(({ imageUrl }, key) => (
        <Image key={key} src={imageUrl} className="swiper__image" />
      )),
    [slides]
  );

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      sliderRequests.retrieveSlides().then(
        (data) => setSlides(data),
        (error) => console.log(error)
      );
    }

    return () => (isActive = false);
  }, []);

  return (
    <Box>
      <Header />
      <Box className={PromoCarouselStyle.caroulesWrapper}>
        <Box className={PromoCarouselStyle.headerCarousel}>
          <Carousel
            slides={imagesComp}
            slideProps={slide}
            carouselProps={carousel}
          />
        </Box>
      </Box>
      <Box className={`${classes.content} wrapper`} component={'main'}>
        <PopularProductsCarousel />
        <ShopCategories />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
