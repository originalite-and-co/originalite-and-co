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

Filter.propTypes = {};

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
          detailsContent={<Typography>
            Some price
          </Typography>
          }
        />
      </Box>
    </Box>
  );
}

export default Filter;