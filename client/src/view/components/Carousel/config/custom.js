import constants from '../../../constants';
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
  spaceBetween: 20,
  pagination: {
    clickable: true
  }
};

export default {
  slide,
  carousel,
  popularProductsCarousel,
  popularProductsSlide
};
