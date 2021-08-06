import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "../../../../../../redux/store/store";
import React from "react";
import SearchDropdown from "./SearchDropdown";

const MockSearchDropdown = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <SearchDropdown/>
            </Provider>
        </BrowserRouter>
    )
}

it('renders search-dropdown without crashing', () => {
    render(<MockSearchDropdown/>)
});

it('should contain a textfield with the label Search for item', function () {
    render(<MockSearchDropdown/>)
    const searchTextField = screen.getByText('Search for item')
    expect(searchTextField).toBeInTheDocument()
});

