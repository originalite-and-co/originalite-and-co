import React from 'react';
import ButtonStyles from './Button.module.scss';
import propTypes from 'prop-types'

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  backgroundColor: propTypes.string,
  text: propTypes.string
}

function Button({
  onClick, backgroundColor, text, color, type
}) {
  return (
    <button
      type={type}
      className={ButtonStyles.button}
      style={{ backgroundColor, color, }}
      onClick={(event) => onClick(event)}
    >
      {text}
    </button>
  );
}

export default Button;
