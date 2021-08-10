import React from 'react';

// import PropTypes from 'prop-types';
import { CarouselList } from '../../components/Carousel';

const images = [
  {
    className: 'swiper__image',
    src: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    className: 'swiper__image',
    src: 'https://images.unsplash.com/photo-1628193826226-a7c781daa6c1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    className: 'swiper__image',
    src: 'https://images.unsplash.com/photo-1628344251112-881c84f6c082?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    className: 'swiper__image',
    src: 'https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const Home = () => (
  <>
    <CarouselList images={images} />
  </>
);
Home.propTypes = {};

export default Home;
