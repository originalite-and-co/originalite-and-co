import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../../../../../../redux/store/store";
import React from "react";
import BurgerDropdown from "./BurgerDropdown";

const MockBurgerDropDown = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <BurgerDropdown/>
            </Provider>
        </BrowserRouter>
    )
}

it('renders burger-dropdown without crashing', () => {
    render(<MockBurgerDropDown/>)
});

it('should contain social component', function () {
    render(<MockBurgerDropDown/>)
    const social = screen.getByTestId('social')
    expect(social).toBeInTheDocument()
});
