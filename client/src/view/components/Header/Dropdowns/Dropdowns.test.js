import {screen,render} from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";
import store from '../../../../redux/store/store'
import Dropdown from "./Dropdown";

const MockWomenDropdown = () => {
    const fn = jest.fn()
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Dropdown onLeave={fn}/>
            </Provider>
        </BrowserRouter>
    )
}

const MockMenDropdown = () => {
    const fn = jest.fn()
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Dropdown onLeave={fn}/>
            </Provider>
        </BrowserRouter>
    )
}


describe('Dropdown tests', () => {
    test('should render WomenDropdown', function () {
        render(<MockWomenDropdown/>)
    });

    test('should render Dropdown', function () {
        render(<MockMenDropdown/>)
    });

    test('Dropdown should contain a list with category items', function () {
        render(<MockMenDropdown/>)
        const list = screen.getByTestId('men-list')
        expect(list).toBeInTheDocument()
    });
})