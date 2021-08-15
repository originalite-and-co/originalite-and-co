import React, { useMemo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './style.scss';

SwiperCore.use([Navigation, Pagination, Thumbs]);

const Carousel = ({ slides, slideProps, carouselProps, carouselChildren }) => {
    const slideList = useMemo(() =>
        slides.map((component, key) => {
            return <SwiperSlide children={component} key={key} {...slideProps} />;
        }),[slides]
    );

    return (

        <div className="caroules-wrapper">
            <Swiper{...carouselProps}>
                {slideList}
                {carouselChildren}
            </Swiper>
        </div>
    );
};

export default Carousel;