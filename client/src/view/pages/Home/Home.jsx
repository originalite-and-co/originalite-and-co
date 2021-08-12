import React, { useEffect, useState, useMemo } from 'react';

// import PropTypes from 'prop-types';
import Carousel, { popularProductCard } from '../../components/Carousel';
import { sliderRequests } from '../../../api/server';

const Image = ({ src, className }) => {
  const alt = src.split('/').pop().split('.')[0];
  return <img src={src} className={className} alt={alt} />;
};

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(async () => {
    setImages(await sliderRequests.getSlides());
  }, []);

  console.log(images);
  const imagesComp = useMemo(
    () =>
      images.map(({ imageUrl }, key) => (
        <Image src={imageUrl} key={key} className="swiper__image" />
      )),
    [images]
  );

  const { slide, carousel } = popularProductCard;

  return (
    <>
      <Carousel
        components={imagesComp}
        slideProps={slide}
        carouselProps={carousel}
      />
    </>
  );
};
Home.propTypes = {};

export default Home;
