import { screen, render, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../../redux/store/store';
import LoginPage from './LoginPage';
import React from 'react';
import userEvent from '@testing-library/user-event';

const TestLoginPage = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </BrowserRouter>
  );
};

describe('LoginPage component', () => {
  test('Should render the LoginPage component', () => {
    render(<TestLoginPage />);
    const loginPage = screen.getByTestId('login-page');
    expect(loginPage).toBeInTheDocument();
  });
  test('should contain the required fields', () => {
    render(<TestLoginPage />);
    const emailField = screen.getByTestId('loginOrEmail');
    const passwordField = screen.getByTestId('password');
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });
  test('should contain the log in button', () => {
    render(<TestLoginPage />);
    const loginBtn = screen.getByText(/LOG IN/);
    expect(loginBtn).toBeInTheDocument();
  });
  test('should contain the radio button', () => {
    render(<TestLoginPage />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
  });
  test('should contain the radio button', () => {
    render(<TestLoginPage />);
    const radio = screen.getByTestId('radio');
    userEvent.click(radio);
  });
  test('should not render welcome message until logged in', () => {
    render(<TestLoginPage />);
    expect(
      screen.queryByText(/Welcome to Originalite, fashionista/)
    ).not.toBeInTheDocument();
  });
});
