import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../../redux/store/store';
import SignUpPage from './SignUpPage';

const fn = jest.fn();
const TestSignUpPage = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SignUpPage onClick={fn} />
      </Provider>
    </BrowserRouter>
  );
};

describe('SignUpPage component', () => {
  test('it should render the SignUpPage component', () => {
    render(<TestSignUpPage />);
    const signUpPage = screen.getByTestId('signup-page');
    expect(signUpPage).toBeInTheDocument();
  });
  test('it should contain the required fields', () => {
    render(<TestSignUpPage />);
    const firstName = screen.getByTestId('firstName');
    const lastName = screen.getByTestId('lastName');
    const login = screen.getByTestId('login');
    const password = screen.getByTestId('password');
    const email = screen.getByTestId('email');

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
  test('it should contain the Sign Up button', () => {
    render(<TestSignUpPage />);
    const signUpBtn = screen.getByText(/Sign Up/);
    expect(signUpBtn).toBeInTheDocument();
  });
});
