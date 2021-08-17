import React, { useEffect, useState, useMemo } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/CardList/CardList.jsx';
import ShopCategories from '../../components/ShopCategories/ShopCategories';
import { Box } from '@material-ui/core';
import PopularProductsCarousel from '../../components/PopularProductsCarousel/PopularProductsCarousel';

import Carousel, { defaultCarousel } from '../../components/Carousel';
import { sliderRequests } from '../../../api/server';
import CarouselStyle from './styles/style';
import classes from './Home.module.scss';

Home.propTypes = {};

const Image = ({ src, className }) => {
  const alt = src.split('/').pop().split('.')[0];
  return <img src={src} className={className} alt={alt} />;
};

function Home() {
  const [slides, setSlides] = useState([]);

  const PromoCarouselStyle = CarouselStyle();

  const { slide, carousel } = defaultCarousel;

  const imagesComp = useMemo(
    () =>
      slides.map(({ imageUrl }, key) => (
        <Image src={imageUrl} key={key} className="swiper__image" />
      )),
    [slides]
  );

  console.log(slides);

  useEffect(() => {
    sliderRequests.retrieveSlides().then(
      (data) => setSlides(data),
      (error) => console.log(error)
    );
  }, []);

  return (
    <Box>
      {/* <Header /> */}

      <div className={PromoCarouselStyle.caroulesWrapper}>
        <div className={PromoCarouselStyle.headerCarousel}>
          <Carousel
            slides={imagesComp}
            slideProps={slide}
            carouselProps={carousel}
          />
        </div>
      </div>

      {/* <Box className={`${classes.content} wrapper`} component={'main'}>
        <PopularProductsCarousel />
        <ShopCategories />
      </Box>
      <Footer /> */}
    </Box>
  );
}

export default Home;
