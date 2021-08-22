import React from 'react';
import PropTypes from 'prop-types';
import { Box, CircularProgress } from '@material-ui/core';
import generateStyles from './styles';
import { makeStyles } from '@material-ui/styles';
import _ from 'lodash';

Loader.propTypes = {
  fixed: PropTypes.bool,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  className: PropTypes.shape({
    container: PropTypes.string,
    loader: PropTypes.string,
  }),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  thickness: PropTypes.number,
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static']),
  position: PropTypes.shape({
    horizontal: PropTypes.oneOf(['center', 'left', 'right']),
    vertical: PropTypes.oneOf(['center', 'top', 'bottom']),
  }),
  value: PropTypes.number
};

Loader.defaultProps = {
  fixed: false,
  color: 'primary',
  className: {},
  size: 40,
  thickness: 3.6,
  variant: 'indeterminate',
  position: {
    horizontal: 'center',
    vertical: 'center',
  },
};

/**
 *
 * @param {Boolean} [fixed] - This prop defines whether component should have position: fixed; or not
 * @param {String} [color] - The color of the loader, based on the theme palette properties
 * @param {Object} [className] - classNames that will be assigned to the container and loader
 * @param {Number | String} [size] - The size of the circle. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.
 * @param {Number} [thickness] - The thickness of the circle.
 * @param {String} [variant] - The variant to use. Use indeterminate when there is no progress value.
 * @param {Object} [position] - The position of the loader. Can be used only if fixed={true}. The object should have 2 keys: horizontal and vertical.
 * @param {Number} [value] - The value of the progress indicator for the determinate variant. Value between 0 and 100.
 * @returns {JSX.Element}
 * @constructor
 */
function Loader(
  {
    fixed,
    color,
    className,
    size,
    thickness,
    variant,
    position,
    value
  }) {

  const useStyles = makeStyles((theme) => generateStyles(theme, size));
  const classes = useStyles();

  const { container = '', loader = '' } = className;


  let containerClassName = `${classes.root} ${container}`;
  let loaderClassName = `${classes.loader} ${loader}`;

  if (fixed) {
    containerClassName += ` ${classes.containerFixed}`;
    loaderClassName += ` ${classes.loaderAbsolute}`;
  }

  if (fixed && position !== null && typeof position === 'object') {
    const { horizontal, vertical } = position;

    if (horizontal) {
      const className = _.camelCase(`horizontal ${horizontal}`);
      const isValid = validateClassName(className, classes);
      if (isValid) {
        loaderClassName += ` ${classes[className]}`;
      }
    }

    if (vertical) {
      const className = _.camelCase(`vertical ${vertical}`);
      const isValid = validateClassName(className, classes);
      if (isValid) {
        loaderClassName += ` ${classes[className]}`;
      }
    }
  }


  return (
    <Box className={containerClassName} data-testid="loaderContainer">
      <CircularProgress
        className={loaderClassName}
        color={color}
        value={value}
        size={size}
        thickness={thickness}
        variant={variant}
        data-testid="loader"
      />
    </Box>
  );
}

function validateClassName(className, allClassNames) {
  return !!allClassNames[className];
}

export default Loader;