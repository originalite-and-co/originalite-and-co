import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from '@material-ui/core';

Person.propTypes = {
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

function Person(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M 22.293964,23.005914 H 1.8651299 c 0,0 -0.8512014,0 -0.8512014,-2.53863 0,-2.538629 0.8512014,-2.538629 0.8512014,-2.538629 L 9.5259742,13.69769 c 0,0 -1.1852892,-1.463711 -1.7024186,-2.538599 C 7.3700221,10.216354 6.9723542,8.6204782 6.9723542,8.6204782 c 0,0 -0.9895378,-3.355677 0,-5.0772116 1.1063437,-1.9247161 1.7024028,-2.538598 5.1072248,-2.538598 3.404741,0 4.256006,0.8461994 5.107271,2.538598 0.851106,1.6924144 0.432667,3.1416521 0,5.0772116 -0.483726,2.1640268 -2.553651,5.0772118 -2.553651,5.0772118 l 7.660765,4.230965 c 0,0 0.851265,0 0.851265,2.538629 0,2.53863 -0.851265,2.53863 -0.851265,2.53863 z"
        stroke="#c4c4c4"
        style={{ strokeWidth: 1.57615 }}
      />
    </SvgIcon>
  );
}

export default Person;
