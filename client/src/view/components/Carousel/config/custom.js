import constants from '../../../constants';
import { makeStyles } from '@material-ui/styles';

const { WINDOW_DESKTOP_SIZE, WINDOW_MOBILE_SIZE, WINDOW_TABLET_SIZE } =
  constants;
const slide = {
  className: 'swiper__slide'
};

const carousel = {
  effect: 'cube',
  navigation: true,
  pagination: {
    clickable: true
  },
  className: 'popularProdCard'
};

const popularProductsSlide = {
  className: 'popularSlide'
};

const popularProductsCarousel = {
  loop: true,
  breakpoints: {
    [WINDOW_MOBILE_SIZE]: {
      slidesPerView: 1
    },
    [WINDOW_TABLET_SIZE]: {
      slidesPerView: 2
    },
    [WINDOW_DESKTOP_SIZE]: {
      slidesPerView: 3
    }
  },
  slidesPerView: 3,
  spaceBetween: 20
};

const useStyles = makeStyles({
  root: {
    '& .swiper-button-prev': {
      mixBlendMode: 'exclusion'
    },
    '& .swiper-button-next': {
      mixBlendMode: 'exclusion'
    }
  }
});

const config = {
  slide,
  carousel,
  popularProductsCarousel,
  popularProductsSlide,
  useStyles
};

export default config;
