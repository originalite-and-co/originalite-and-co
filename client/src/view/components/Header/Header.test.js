import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import {Provider} from "react-redux";
import store from "../../../redux/store/store";
import React from "react";
import Nav from "./Nav/Nav";
import CatalogNav from "./CatalogNav/CatalogNav";

const mobileHeader =
    <>
        <Nav/>
        <CatalogNav/>
    </>

const MockHeader = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
        </Provider>
      </BrowserRouter>
  )
}

const MobileHeader = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {mobileHeader}
            </Provider>
        </BrowserRouter>
    )
}

describe("Header component", () => {
    test('renders Header without crashing', () => {
        render(<MockHeader/>)
    });

    test('should contain nav component', function () {
        render(<MockHeader/>)
        const nav = screen.getByTestId('catalog-nav');
        expect(nav).toBeInTheDocument()
    });

    test('should contain catalog-nav component', function () {
        render(<MobileHeader/>)
        const catalogNav = screen.getByTestId('catalog-nav')
        expect(catalogNav).toBeInTheDocument()
    });
})
