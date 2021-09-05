import React from 'react';
import style from '../style';

const TextError = ({ children }) => {
  const useStyle = style();
  return <p className={useStyle.error}>{children}</p>;
};

export default TextError;
