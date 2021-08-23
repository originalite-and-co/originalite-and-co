import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';
import store from '../../../redux/store/store';
import renderWithRedux from '../../../utils/renderWiithRedux';
import { BrowserRouter } from 'react-router-dom';

describe('testing footer', () => {
  test('renders Footer without crashing', () => {
    const footer = (
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    renderWithRedux(footer, store);
  });

  test('should contain root className', () => {
    const { container } = renderWithRedux(<Footer />, store);
    container.querySelector('.makeStyles-root-1');
  });
});
