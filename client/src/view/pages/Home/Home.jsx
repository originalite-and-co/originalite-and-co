import React, { useEffect, useState } from 'react';

// import PropTypes from 'prop-types';
import { CarouselList } from '../../components/Carousel';
import { sliderRequests } from '../../../api/server';

const Home = () => {
  const [images, setImages] = useState([]);

  console.log(images);
  useEffect(async () => {
    setImages(await sliderRequests.getSlides());
  }, []);

  return (
    <>
      <CarouselList images={images} />
    </>
  );
};
Home.propTypes = {};

export default Home;
