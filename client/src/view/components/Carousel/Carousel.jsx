import React, { useMemo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { sliderRequests } from '../../../api/server';
import 'swiper/swiper-bundle.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const Image = ({ src, className }) => {
  const alt = src.split('/').pop().split('.')[0];
  return <img src={src} className={className} alt={alt} />;
};

const CarouselList = ({ images, slideProps, carouselProps }) => {
  const slides = useMemo(() =>
    images.map(({ imageUrl, className = 'swiper__image' }, key) => (
      <SwiperSlide key={key} {...carouselProps}>
        <Image src={imageUrl} className={className} />
      </SwiperSlide>
    ))
  );

  return (
    <div className="caroules-wrapper">
      <Swiper {...slideProps}>{slides}</Swiper>
    </div>
  );
};

export default CarouselList;
