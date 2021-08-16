import React, { useMemo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';

import 'swiper/swiper-bundle.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const Carousel = ({ components, slideProps, carouselProps }) => {
  const slides = useMemo(
    () =>
      components.map((component, key) => {
        return <SwiperSlide children={component} key={key} {...slideProps} />;
      }),
    [components]
  );

  return (
    <div className="caroules-wrapper">
      <Swiper {...carouselProps}>{slides}</Swiper>
    </div>
  );
};

export default Carousel;
