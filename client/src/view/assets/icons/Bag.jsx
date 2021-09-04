import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '@material-ui/core';

Bag.propTypes = {
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

function Bag(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M 5.8755919,9.7238229 V 5.0486535 c 0,-0.4441097 0.053548,-0.889231 0.2808753,-1.3040849 C 6.7251241,2.706739 8.2952519,0.77977036 12.069106,0.94086155 16.243855,1.11908 17.306921,3.2739817 17.559282,4.0795729 c 0.06248,0.1991519 0.07352,0.4033621 0.07352,0.6072079 v 5.0370421"
        stroke="#c4c4c4"
        id="path12"
        style={{ strokeWidth: '1.6px' }}
      />
      <path
        d="M 1.8382508,11.013628 C 1.9431557,9.8540894 3.0859583,8.9585114 4.4606633,8.9585114 H 19.656463 c 1.374654,0 2.517508,0.895578 2.622361,2.0551166 l 0.890367,9.842411 c 0.116951,1.291921 -1.090781,2.394724 -2.62236,2.394724 H 3.5702427 c -1.5316328,0 -2.73928248,-1.102803 -2.62240719,-2.394724 z"
        stroke="#c4c4c4"
        id="path10"
        style={{ strokeWidth: '1.6px' }}
      />
    </SvgIcon>
  );
}

export default Bag;
