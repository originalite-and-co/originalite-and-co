import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  slideProps: PropTypes.object.isRequired,
  carouselProps: PropTypes.object.isRequired,
  carouselChildren: PropTypes.node
};

function Carousel({ slides, slideProps, carouselProps, carouselChildren }) {
  const slideList = useMemo(
    () =>
      slides.map((slide, key) => {
        return (
          <SwiperSlide key={key} {...slideProps}>
            <>{slide}</>
          </SwiperSlide>
        );
      }),
    [slideProps, slides]
  );

  return (
    <Swiper {...carouselProps}>
      {slideList}
      {carouselChildren}
    </Swiper>
  );
}

export default Carousel;
