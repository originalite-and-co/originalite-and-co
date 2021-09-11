import React from 'react';

import PropTypes from 'prop-types';

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

function Image({ src, className }) {
  const alt = src.split('/').pop().split('.')[0];
  return <img src={src} className={className} alt={alt} />;
}

export default Image;
