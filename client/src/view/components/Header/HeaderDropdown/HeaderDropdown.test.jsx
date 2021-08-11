import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../../../redux/store/store";
import Button from "../../Button/Button";
import {render, screen} from "@testing-library/react";
import React from "react";
import HeaderDropdown from "./HeaderDropdown";
import styles from './HeaderDropdown.module.scss'

const fn = jest.fn()
const dropdownContent = <p>Hello Kids</p>
const TestHeaderDropdown = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <HeaderDropdown classNames={{
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
describe("HeaderDropdown component", () => {
    test('should render the HeaderDropdown component', () => {
        render(<TestHeaderDropdown/>)
    })
    test('should render children', () => {
        render(<TestHeaderDropdown/>)
        const children = screen.getByText('Hello Kids')
        expect(children).toBeInTheDocument()
    })
})