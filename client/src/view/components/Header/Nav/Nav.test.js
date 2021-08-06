import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import {Provider} from "react-redux";
import store from "../../../../redux/store/store";
import React from "react";
import {render,screen} from "@testing-library/react";

const MockNav = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Nav/>
        </Provider>
      </BrowserRouter>
  )
}

it('should contain Logo component', function () {
  render(<MockNav/>)
  const logo = screen.getByTestId('logo')
  expect(logo).toBeInTheDocument()
});

it('should contain NavItems component', function () {
  render(<MockNav/>)
  const navItems = screen.getByTestId('navItems')
  expect(navItems).toBeInTheDocument()
});