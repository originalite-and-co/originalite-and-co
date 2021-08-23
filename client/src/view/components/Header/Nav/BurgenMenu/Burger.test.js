import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Burger from './Burger';
import store from '../../../../../redux/store/store';

const MockBurger = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Burger />
      </Provider>
    </BrowserRouter>
  );
};

test('should render burger menu', function () {
  render(<MockBurger />);
});
