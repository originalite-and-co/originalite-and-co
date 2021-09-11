import { makeStyles } from '@material-ui/core/styles';
import constants from '../../../constants';

const { WINDOW_DESKTOP_SIZE, WINDOW_MOBILE_SIZE, WINDOW_TABLET_SIZE } =
  constants;

const slideViewedProduct = {
  className: 'swiper__slide'
};

const carouselViewedProduct = {
  effect: 'cube',
  navigation: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    [WINDOW_MOBILE_SIZE]: {
      slidesPerView: 1
    },
    [WINDOW_TABLET_SIZE]: {
      slidesPerView: 2
    },
    [WINDOW_DESKTOP_SIZE]: {
      slidesPerView: 4
    }
  }
};

const useStylesViewedProduct = makeStyles({
  carouselWrapper: {
    width: '100%',
    display: 'flex',
    height: 'calc(100vh - 94px)',
    position: 'relative'
  },
  headerCarousel: {
    marginBottom: '100px',
    '& .swiper-container': {
      height: '100%'
    },
    '& .swiper__slide': {
      zIndex: 1,
      display: 'flex',
      height: '100%'
    },
    '& .swiper__image': {
      display: 'block',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      margin: 0
    },
    '& .swiper-button-next:after': {
      zIndex: 6,
      fontWeight: 900,
      color: '#fff'
    },
    '& .swiper-button-prev:after': {
      zIndex: 6,
      fontWeight: 600,
      color: '#fff'
    },
    '& .swiper-button-prev': {
      mixBlendMode: 'exclusion'
    },
    '& .swiper-button-next': {
      mixBlendMode: 'exclusion'
    }
  }
});

const config = {
  slideViewedProduct,
  carouselViewedProduct,
  useStylesViewedProduct
};

export default config;
