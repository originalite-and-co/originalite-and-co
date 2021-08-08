import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const swiperSlideParam = {
  className: 'swiper__slide'
};

const swiperListParam = {
  loop: true,
  effect: 'cube',
  pagination: {
    clickable: true
  },
  navigation: true
};

const Image = ({ src, className }) => {
  const alt = src.split('/').pop().split('.')[0];
  return <img src={src} className={className} alt={alt} />;
};

const CarouselList = ({ images }) => {
  const slides = useMemo(() =>
    images.map(({ src, className }, key) => (
      <SwiperSlide key={key} {...swiperSlideParam}>
        <Image src={src} className={className} />
      </SwiperSlide>
    ))
  );

  return <Swiper {...swiperListParam}>{slides}</Swiper>;
};

export default CarouselList;
