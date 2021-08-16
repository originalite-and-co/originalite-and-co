import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../redux/store/store';
import React from 'react';
import Carousel from '../Carousel';

const TestCarousel = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Carousel components={[]} carouselProps={{}} slideProps={{}} />
      </Provider>
    </BrowserRouter>
  );
};
describe('Carousel component', () => {
  test('should render the Carousel component', () => {
    render(<TestCarousel />);
  });
});
