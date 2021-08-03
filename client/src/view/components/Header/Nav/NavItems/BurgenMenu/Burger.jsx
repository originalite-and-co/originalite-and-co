import React from 'react';
import Box from '@material-ui/core/Box';
import BurgerStyles from './Burger.module.scss';

function Burger() {
  return (
    <Box className={BurgerStyles.container}>
      <div className={BurgerStyles.wrapper}>
        <span className={BurgerStyles.line} />
        <span className={BurgerStyles.middleLine} />
        <span className={BurgerStyles.line} />
      </div>
    </Box>
  );
}

export default Burger;
