import {screen, render} from '@testing-library/react'
import Authentication from "./Authentication";
import {BrowserRouter} from "react-router-dom";
import store from './../../../redux/store/store'
import {Provider} from "react-redux";

const TestAuthentication = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Authentication/>
            </Provider>
        </BrowserRouter>
    )
}

describe("Authentication page", () => {
    test('it should render the Authentication page', () => {
        render(<TestAuthentication/>)
        const authComponent = screen.getByTestId('authentication')
        expect(authComponent).toBeInTheDocument()
    })
    test("it should contain the AuthenticationContent component",() => {
        render(<TestAuthentication/>)
        const authContent = screen.getByTestId('authentication-content')
        expect(authContent).toBeInTheDocument()
    })
})