import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import classes from './Color.module.scss';
import { Grid, Typography } from '@material-ui/core';

import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterActions,
  filterSelectors
} from '../../../../../redux/features/filters';

Color.propTypes = {
  name: PropTypes.string.isRequired,
  cssValue: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool.isRequired
};

function Color({ name, cssValue, isDesktop }) {
  const [isChecked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const colors = useSelector((state) =>
    filterSelectors.getSelectedFilter(state, 'color')
  );

  useEffect(() => {
    if (Array.isArray(colors)) {
      setChecked(colors.some((color) => color === name));
      return;
    }

    setChecked(colors === name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  const handleButtonClick = () => {
    if (isChecked) {
      setChecked(false);
      dispatch(filterActions.deleteFilterValue('color', name));
      return;
    }

    dispatch(filterActions.addFilter({ color: [name] }));
    setChecked(true);
  };

  return (
    <Grid
      item
      component="li"
      xs={isDesktop ? 12 : 4}
      className={classes.listItem}
    >
      <button
        onClick={handleButtonClick}
        data-testid="color-button"
        className={classes.colorButton}
      >
        <span className={classes.color} style={{ backgroundColor: cssValue }} />
        <Typography
          noWrap
          className={
            isChecked
              ? `${classes.colorName} ${classes.active}`
              : classes.colorName
          }
          component="p"
          variant="body1"
        >
          {_.lowerCase(name)}
        </Typography>
      </button>
    </Grid>
  );
}

export default Color;
