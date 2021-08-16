import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';

import PropTypes from 'prop-types';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay]);

const Carousel = ({ components, slideProps, carouselProps }) => {
  const slides = useMemo(
    () =>
      components.map((component, key) => {
        return (
          <SwiperSlide key={key} {...slideProps}>
            <>{component}</>
          </SwiperSlide>
        );
      }),
    [components]
  );

  return <Swiper {...carouselProps}>{slides}</Swiper>;
};

Carousel.propTypes = {
  components: PropTypes.array.isRequired,
  slideProps: PropTypes.object.isRequired,
  carouselProps: PropTypes.object.isRequired
};

export default Carousel;
