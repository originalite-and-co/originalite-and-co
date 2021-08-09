import {render,screen,userEvent, fireEvent} from "@testing-library/react";
import NavItems from "./NavItems";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from './../../../../../redux/store/store';
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

describe("navitems", () => {
    test('should contain three images', function () {
        render(<MockNavItems/>)
        const search = screen.getByAltText('search icon');
        const person = screen.getByAltText('person');
        const bag = screen.getByAltText('bag');
        expect(search).toBeInTheDocument()
        expect(person).toBeInTheDocument()
        expect(bag).toBeInTheDocument()
    });

})


