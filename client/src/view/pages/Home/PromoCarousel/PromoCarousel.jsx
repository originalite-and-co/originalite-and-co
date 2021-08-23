import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel, { defaultCarousel } from '../../../components/Carousel';
import Image from '../../../components/Image';
import { slideRequests } from '../../../../api/server';
import { Box } from '@material-ui/core';

PromoCarousel.propTypes = {};

function PromoCarousel(props) {
  const { slide, carousel, useStyles } = defaultCarousel;
  const [slides, setSlides] = useState([]);
  const classes = useStyles();

  const imagesComp = useMemo(
    () =>
      slides.map(({ imageUrl, _id }) => (
        <Image key={_id} src={imageUrl} className="swiper__image" />
      )),
    [slides]
  );

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      slideRequests.retrieveSlides().then(
        (data) => setSlides(data),
        (error) => console.log(error)
      );
    }

    return () => (isActive = false);
  }, []);
  return (
    <Box className={classes.carouselWrapper}>
      <Box className={classes.headerCarousel}>
        <Carousel
          slides={imagesComp}
          slideProps={slide}
          carouselProps={carousel}
        />
      </Box>
    </Box>
  );
}

export default PromoCarousel;
