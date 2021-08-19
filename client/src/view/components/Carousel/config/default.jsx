import { makeStyles } from '@material-ui/core/styles';

const slide = {
  className: 'swiper__slide',
};

const carousel = {
  loop: true,
  effect: 'cube',
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  navigation: true,
};

const styles = makeStyles({
  caroulesWrapper: {
    width: '100%',
    display: 'flex',
    height: 'calc(100vh - 94px)',
    padding: '94px 0 0 0',
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
});

export default { slide, carousel, styles };
