import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import {Provider} from "react-redux";
import store from "../../../redux/store/store";

const MockFooter = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Footer/>
            </Provider>
        </BrowserRouter>
    )
}

it('renders footerLinks without crashing', () => {
    render(<MockFooter/>)
});

it('should contain footerLinks component', function () {
    render(<MockFooter/>)
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument()
});

