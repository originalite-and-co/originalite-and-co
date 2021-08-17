// .caroules-wrapper {
//   width: 100%;
//   display: flex;
//   height: 50vh;
//   position: relative;
// }

// .swiper__slide {
//   z-index: 1;
//   display: flex;
//   height: 100%;
// }

// .swiper__image {
//   display: block;
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   object-position: center;
//   margin: 0;
// }

// .header__carousel .swiper-pagination {
//   padding: 20px;
//   text-align: left;
// }

// .header__carousel .swiper-pagination-bullet {
//   box-shadow: 0 0 0 2px #333;
//   background-color: #fff;
//   width: 16px;
//   height: 16px;
//   margin: 0 10px;
// }

// .header__carousel .swiper-button-next:after,
// .header__carousel .swiper-button-prev:after {
//   z-index: 6;
//   font-weight: 900;
//   color: #fff;
// }

// .header__carousel .swiper-button-prev,
// .header__carousel .swiper-button-next {
//   mix-blend-mode: exclusion;
// }

import { createUseStyles } from 'react-jss';

const styles = {
  caroulesWrapper: {
    width: '100%',
    display: 'flex',
    height: '70vh',
    position: 'relative',
  },
  headerCarousel: {
    width: '100%',
    '& .swiper-container': {
      height: '100%',
    },
    '& .swiper__slide': {
      zIndex: 1,
      display: 'flex',
      height: '100%',
    },
    '& .swiper__image': {
      display: 'block',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      margin: 0,
    },
    '& .swiper-pagination': {
      padding: 20,
      textAlign: 'left',
    },
    '& .swiper-pagination-bullet': {
      boxShadow: '0 0 0 2px #333',
      backgroundColor: '#fff',
      width: 16,
      height: 16,
      margin: '0 10px',
    },
    '& .swiper-button-next:after': {
      zIndex: 6,
      fontWeight: 900,
      color: '#fff',
    },
    '& .swiper-button-prev:after': {
      zIndex: 6,
      fontWeight: 900,
      color: '#fff',
    },
    '& .swiper-button-prev': {
      mixBlendMode: 'exclusion',
    },
    '& .swiper-button-next': {
      mixBlendMode: 'exclusion',
    },
  },
};

export default createUseStyles(styles);
