import React, { useEffect, useState, useMemo } from 'react';
import { sliderRequests } from '../../../../api/server';

import PropTypes from 'prop-types';
import Carousel, { defaultCarousel } from '../../../components/Carousel';

const Image = ({ src, className }) => {
  const alt = src.split('/').pop().split('.')[0];
  return <img src={src} className={className} alt={alt} />;
};

const HeaderCarousel = () => {
  const { slide, carousel } = defaultCarousel;

  const [images, setImages] = useState([]);

  useEffect(async () => {
    try {
      setImages(await sliderRequests.getSlides());
    } catch (e) {
      console.log(e);
    }
  }, []);

  const imagesComp = useMemo(
    () =>
      images.map(({ imageUrl }, key) => (
        <Image src={imageUrl} key={key} className="swiper__image" />
      )),
    [images]
  );

  return (
    <Carousel
      components={imagesComp}
      slideProps={slide}
      carouselProps={carousel}
    />
  );
};

export default HeaderCarousel;
