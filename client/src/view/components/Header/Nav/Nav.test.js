import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
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

test('should render Nav component', function () {
  render(<MockNav/>)
});
