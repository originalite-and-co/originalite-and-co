import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from '../../../../redux/store/store';
import React from 'react';
import { render } from '@testing-library/react';

const MockNav = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
      </Provider>
    </BrowserRouter>
  );
};
=======
import {Provider} from "react-redux";
import store from "../../../../redux/store/store";
import React, {useState} from "react";
import {render,screen} from "@testing-library/react";
import CustomThemeProvider from "../../../HOC/CustomThemeProvider/CustomThemeProvider";

const MockNav = () => {
    const [isDesktop, setIsDesktop] = useState(true)
    return (
        <CustomThemeProvider>
        <BrowserRouter>
        <Provider store={store}>
            {isDesktop && <Nav/>}
        </Provider>
      </BrowserRouter>
        </CustomThemeProvider>
  )
}
>>>>>>> origin/develop

test('should render Nav component', function () {
  render(<MockNav />);
});
