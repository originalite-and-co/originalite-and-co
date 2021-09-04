import { makeStyles } from '@material-ui/core/styles';

const slideProduct = {
  className: 'swiper__slide',
};

const carouselProduct = {
  loop: true,
  effect: 'cube',
  pagination: {
    clickable: true,
  },
  navigation: true,
}

const useStylesProduct = makeStyles({
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
      width: 10,
      height: 10,
      margin: '0 10px',
    },
    '& .swiper-button-next:after': {
      zIndex: 6,
      fontWeight: 600,
      color: '#fff',
    },
    '& .swiper-button-prev:after': {
      zIndex: 6,
      fontWeight: 600,
      color: '#fff',
    },
    '& .swiper-button-prev': {
      mixBlendMode: 'exclusion',
    },
    '& .swiper-button-next': {
      mixBlendMode: 'exclusion',
    },
  },
});

export default { slideProduct, carouselProduct, useStylesProduct };
