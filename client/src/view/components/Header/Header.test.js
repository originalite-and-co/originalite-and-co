import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import {Provider} from "react-redux";
import store from "../../../redux/store/store";
import React from "react";

const MockHeader = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
        </Provider>
      </BrowserRouter>
  )
}

it('renders Header without crashing', () => {
  render(<MockHeader/>)
});

it('should contain nav component', function () {
  render(<MockHeader/>)
  const nav = screen.getByTestId('nav');
  expect(nav).toBeInTheDocument()
});

it('should contain catalog-nav component', function () {
  render(<MockHeader/>)
  const catalogNav = screen.getByTestId('catalog-nav')
  expect(catalogNav).toBeInTheDocument()
});
