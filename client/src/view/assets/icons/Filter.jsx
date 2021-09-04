import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '@material-ui/core';

Filter.propTypes = {
  children: PropTypes.element,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'disabled',
    'error'
  ]),
  fontSize: PropTypes.oneOf(['default', 'inherit', 'large', 'medium', 'small']),
  htmlColor: PropTypes.string,
  shapeRendering: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string
};

function Filter(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="  M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z"
        fill="none"
        id="XMLID_6_"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </SvgIcon>
  );
}

export default Filter;
