import React, { useEffect, useState } from 'react';

import Color from './Color/Color';
import Size from './Size/Size';
import FilterAccordion from './FilterAccordion/FilterAccordion';
import CategoryNav from './CategoryNav/CategoryNav';

import { catalogRequests, colorRequests, sizeRequests } from '../../../../api/server';
import useAsyncError from '../../../hooks/useAsyncError';
import useWindowSize from '../../../hooks/useWindowSize';
import constants from '../../../constants';

import { useDispatch } from 'react-redux';
import { isAnyDropdownOpenActions } from '../../../../redux/features/dropdown';
import { useRouteMatch } from 'react-router-dom';

import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import classes from './Filter.module.scss';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

Filter.propTypes = {};

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  valueLabel: {
    left: -13,
    top: -35,
    '& *': {
      background: '#fff',
      color: '#000',
      fontWeight: 'bold',
    },
  },
  thumb: {
    height: 24,
    width: 6,
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: -10,
    marginLeft: -2,
  },
  track: {
    backgroundColor: '#fff',
    height: 4,
    borderRadius: 4,
  },
  rail: {
    backgroundColor: '#333',
    height: 2,
    borderRadius: 4,
  },
})(Slider);

function Filter(props) {

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [isDesktop, setDesktop] = useState(false);
  const [category, setCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const throwAsyncError = useAsyncError();
  const { width } = useWindowSize();
  const { params } = useRouteMatch();

  const dispatch = useDispatch();


  useEffect(() => {
    setIsLoaded(false);
    catalogRequests.retrieveCategory(params.category)
      .then(category => setCategory(category))
      .then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    setIsLoaded(false);
    colorRequests.retrieveColors()
      .then(
        data => setColors(data),
        error => throwAsyncError(error),
      )
      .then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    sizeRequests.retrieveSizes()
      .then(
        data => setSizes(data),
        error => throwAsyncError(error),
      )
      .then(() => setIsLoaded(true));
  }, []);

  const colorList = colors?.map(({ _id, name, cssValue }) => {
    return (
      <Color key={_id} name={name} cssValue={cssValue} isDesktop={isDesktop} />
    );
  });

  const sizeList = sizes?.map(({ name, _id }) => {
    return (
      <Size key={_id} name={name} isDesktop={isDesktop} />
    );
  });

  const handleCloseBtnClick = event => {
    dispatch(isAnyDropdownOpenActions.closedDropdown());
  };

  return (
    <Box className={classes.root}>
      {
        isDesktop && isLoaded && (
          <>
            <CategoryNav parentCategoryId={category?.id} parentCategoryName={category?.name} />
          </>
        )
      }

      {
        !isDesktop && isLoaded && (
          <>
            <Typography align='center' color='textSecondary' className={classes.heading} component='p' variant='body2'>
              Filters
            </Typography>
            <IconButton onClick={handleCloseBtnClick} className={classes.closeButton} aria-label='close'>
              <Close />
            </IconButton>
            <Divider className={classes.divider} />
          </>
        )
      }

      <Box className={`${classes.content} wrapper`}>
        <FilterAccordion
          isDesktop={isDesktop}
          text='Colors'
          detailsContent={<Grid
            spacing={isDesktop ? 5 : 7}
            container
            component='ul'
            direction={isDesktop ? 'column' : 'row'}
            wrap={isDesktop ? 'nowrap' : 'wrap'}
          >
            {colorList}
          </Grid>}
        />
        <FilterAccordion
          isDesktop={isDesktop}
          text='Sizes'
          detailsContent={<Grid
            container
            component='ul'
            spacing={isDesktop ? 4 : 5}
            direction={isDesktop ? 'column' : 'row'}
            wrap={isDesktop ? 'nowrap' : 'wrap'}
          >
            {sizeList}
          </Grid>}
        />
        <FilterAccordion
          isDesktop={isDesktop}
          text={'Price'}
          detailsContent={
            <>
              <PrettoSlider
                defaultValue={[0, 100]}
                onChangeCommitted={(_, range) => {
                  const [minPrice, maxPrice] = range.map(String);
                  dispatch(
                    filterActions.addFilter({
                      minPrice,
                      maxPrice,
                    }),
                  );
                }}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                getAriaValueText={valuetext}
              />
            </>
          }
        />
      </Box>
    </Box>
  );
}

export default Filter;