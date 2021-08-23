import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import { Provider } from 'react-redux';
import store from '../../../../redux/store/store';
import React from 'react';
import { render } from '@testing-library/react';

const MockNav = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>{<Nav />}</Provider>
    </BrowserRouter>
  );
};

test('should render Nav component', function () {
  render(<MockNav />);
});
