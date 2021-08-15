import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../../redux/store/store";
import Button from "../Button/Button";
import {render, screen} from "@testing-library/react";
import React from "react";
import Dropdown from "./Dropdown";
import styles from './Dropdown.module.scss'

const fn = jest.fn()
const dropdownContent = <p>Hello Kids</p>
const TestHeaderDropdown = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Dropdown classNames={{
                    closed: styles.dropdown,
                    active: styles.dropdownActive
                }}
                          lockBodyScrolling
                          onLeave={fn}
                          children={dropdownContent}/>
            </Provider>
        </BrowserRouter>
    )
}
describe("Dropdown component", () => {
    test('should render the Dropdown component', () => {
        render(<TestHeaderDropdown/>)
    })
    test('should render children', () => {
        render(<TestHeaderDropdown/>)
        const children = screen.getByText('Hello Kids')
        expect(children).toBeInTheDocument()
    })
})