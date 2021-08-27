import React from 'react';
import ButtonStyles from './Button.module.scss';
import propTypes from 'prop-types';

Button.propTypes = {
  onClick: propTypes.func,
  backgroundColor: propTypes.string,
  text: propTypes.string,
};

Button.defaultProps = {
  onClick: () => null,
};

function Button({ onClick, backgroundColor, text, color, type }) {
  return (
    <button
      type={type}
      className={ButtonStyles.button}
      style={{ backgroundColor, color }}
      onClick={(event) => onClick(event)}
    >
      {text}
    </button>
  );
}

export default Button;
