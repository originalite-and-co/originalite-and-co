import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from '../../../../redux/store/store';
import React from 'react';
import Box from '@material-ui/core/Box';
import { CatalogNavButton, CatalogNavLink } from './LinkButtonGenerators';
import CatalogNav from './CatalogNav';
=======
import {Provider} from "react-redux";
import store from "../../../../redux/store/store";
import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import {CatalogNavButton, CatalogNavLink} from "./LinkButtonGenerators";
import CatalogNav from "./CatalogNav";
import CustomThemeProvider from "../../../HOC/CustomThemeProvider/CustomThemeProvider";
>>>>>>> origin/develop

const MockCatalogItem = () => {
  const isDesktop = true
  const fn = jest.fn();
  return (
      <CustomThemeProvider>
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
      </CustomThemeProvider>
  )
}
const MockCatalog = () => {
  return (
      <CustomThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <CatalogNav/>
        </Provider>
      </BrowserRouter>
      </CustomThemeProvider>
  )
}

describe("CatalogNav component", () => {
    test('should render the button and not the link', function () {
        render(<MockCatalogItem/>);
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
    });
    test('should render the CatalogNav component', function () {
        render(<MockCatalog/>);
        expect(screen.getByTestId('catalog-nav')).toBeInTheDocument()
    });
})








