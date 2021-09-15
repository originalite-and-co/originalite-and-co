import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeExp from '../../../../redux/store/store';
import React from 'react';
import Image from '../Image';

const { store } = storeExp;

const TestImage = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Image src="" className="" />
      </Provider>
    </BrowserRouter>
  );
};

describe('Image component', () => {
  test('should render the Image component', () => {
    render(<TestImage />);
  });
});
