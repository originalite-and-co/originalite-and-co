import {screen,render} from "@testing-library/react";
import AuthenticationContent from "./AuthenticationContent";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './../../../../redux/store/store'

const TestAuthenticationContent = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AuthenticationContent/>
            </Provider>
        </BrowserRouter>
    )
}

const fn = jest.fn()

describe('AuthenticationContent component', () => {
    test("It should render the AuthenticationContent component", () => {
        render(<TestAuthenticationContent/>)
        const authContent = screen.getByTestId('authentication-content')
        expect(authContent).toBeInTheDocument()
    })
    test('there should be both log in and sign up buttons', () => {
        render(<TestAuthenticationContent/>)
            const loginBtns = screen.getAllByTestId('logsign-btns')
        expect(loginBtns.length).toBe(2)
    })
    test('buttons group should have accountBtns class',() => {
        render(<TestAuthenticationContent/>)
        const btnGroup = screen.getByTestId('account-btns')
        expect(btnGroup).toHaveClass('accountBtns')
    })
})