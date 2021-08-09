import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from "@testing-library/react";
import Footer from './Footer'
import store from '../../../redux/store/store';
import {Provider} from "react-redux";
import {Router} from "@material-ui/icons";
import {BrowserRouter} from 'react-router-dom';

const MockFooter = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Router>
                    <Footer/>
                </Router>
            </Provider>
        </BrowserRouter>
    )
}

describe('testing footer', () => {
    test('renders Footer without crashing', () => {
        render(<MockFooter/>)
    });

    test('should contain root className', () => {
        const { container } = render(<MockFooter/>)
        container.querySelector('.makeStyles-root-1')
    });
})