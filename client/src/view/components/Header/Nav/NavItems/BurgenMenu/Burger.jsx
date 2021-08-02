import React from 'react';
import BurgerStyles from './Burger.module.scss';

function Burger() {
  return (
    <div className={BurgerStyles.wrapper}>
      <span className={BurgerStyles.line} />
      <span className={BurgerStyles.middleLine} />
      <span className={BurgerStyles.line} />
    </div>
  );
}

export default Burger;
