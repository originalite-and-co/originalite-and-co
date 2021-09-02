import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '@material-ui/core';

Search.propTypes = {
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

function Search(props) {
  return (
    <SvgIcon {...props}>
      <circle
        cx="9.9622021"
        cy="9.8271084"
        stroke="#c4c4c4"
        style={{ strokeWidth: 1.8 }}
        r="9"
      />
      <path
        d="m 15.781025,15.434807 7.889894,7.277998 c 0.272225,0.251019 0.316522,0.702061 0.09912,1.007141 -0.217577,0.305259 -0.614376,0.349227 -0.886602,0.09821 L 14.99352,16.540174 Z"
        fill="#c4c4c4"
        style={{ strokeWidth: 5 }}
      />
    </SvgIcon>
  );
}

export default Search;
