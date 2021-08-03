import React from 'react';
import ButtonStyles from './Button.module.scss';

// eslint-disable-next-line react/prop-types
function Button({
  // eslint-disable-next-line react/prop-types
  onClick, backgroundColor, text, color,
}) {
  return (
    <button
      type="button"
      className={ButtonStyles.button}
      style={{ backgroundColor, color, }}
      onClick={(event) => onClick(event)}
    >
      {text}
    </button>
  );
}

export default Button;
