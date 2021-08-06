import {render,screen,userEvent, fireEvent} from "@testing-library/react";
import NavItems from "./NavItems";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from './../../../../../redux/store/store';
import Box from "@material-ui/core/Box";
import NavItemsStyles from "./NavItems.module.scss";
import search from "../icons/search.svg";
import React from "react";

const MockNavItems = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <NavItems/>
            </Provider>
        </BrowserRouter>
    )
}

it('should contain three images', function () {
    render(<MockNavItems/>)
    const search = screen.getByAltText('search');
    const person = screen.getByAltText('person');
    const bag = screen.getByAltText('bag');
    expect(search).toBeInTheDocument()
    expect(person).toBeInTheDocument()
    expect(bag).toBeInTheDocument()
});

it('should contain burger menu', function () {
    render(<MockNavItems/>)
    const burger = screen.getByTestId('burger');
    expect(burger).toBeInTheDocument()
});


