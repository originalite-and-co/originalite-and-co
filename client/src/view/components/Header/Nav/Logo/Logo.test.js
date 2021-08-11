import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from './Logo';
import {Provider} from "react-redux";
import store from "../../../../../redux/store/store";
import React from "react";

const MockLogo = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Logo/>
        </Provider>
      </BrowserRouter>
  )
}

describe("Logo component", () => {
    test('should have an alt text', function () {
        render(<MockLogo/>)
        const altText = screen.getByAltText('Logo')
        expect(altText).toBeInTheDocument()
    });

    test('should be a link', function () {
        render(<MockLogo/>)
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
    });
})

