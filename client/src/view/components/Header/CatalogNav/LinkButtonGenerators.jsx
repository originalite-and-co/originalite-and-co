import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function CatalogNavLink({
  pathTo,
  handleHover,
  styles,
  text,
  onMouseLeave
}) {
  return (
    <Link
      onMouseEnter={handleHover}
      className={styles}
      to={pathTo}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </Link>
  );
}

export function CatalogNavButton({ onClickFunc, styles, text }) {
  return (
    <button type="button" className={styles} onClick={onClickFunc}>
      {text}
    </button>
  );
}
