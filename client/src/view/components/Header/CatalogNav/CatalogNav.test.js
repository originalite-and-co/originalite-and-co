import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../../../../redux/store/store";
import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {CatalogNavButton, CatalogNavLink} from "./LinkButtonGenerators";
import CatalogNav from "./CatalogNav";

const MockCatalogItem = () => {
  const isDesktop = true
  const fn = jest.fn();
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Box>
            {isDesktop
                ?
                <CatalogNavLink
                    pathTo="/"
                    onHoverFunc={fn}
                    text="women"/>
                :
                <CatalogNavButton
                    onClickFunc={fn}
                    text="women"/>
            }
          </Box>
        </Provider>
      </BrowserRouter>
  )
}
const MockCatalog = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <CatalogNav/>
        </Provider>
      </BrowserRouter>
  )
}

describe("CatalogNav component", () => {
    it('should render the button and not the link', function () {
        render(<MockCatalogItem/>);
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
    });
    it('should render the CatalogNav component', function () {
        render(<MockCatalog/>);
        expect(screen.getByTestId('catalog-nav')).toBeInTheDocument()
    });
})








