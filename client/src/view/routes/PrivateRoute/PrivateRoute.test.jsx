import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PrivateRoute from './PrivateRoute';

/**
 * Regular expression is used to check if component includes written text.
 * Flag "i" means that there is no difference between upper or lowercase.
 *
 * @example getByText(/test/i) - this func will look through rendered components and find one
 * that includes test, Test, TEST ... content
 *
 * */
describe('Private route', () => {
  const LoginComponent = () => <p>Login</p>;
  const TestComponent = () => <p>Test</p>;
  test('Smoke', () => {
    const { getByTestId, getByText, queryByText, } = render(
      <BrowserRouter>
        <Link data-testid="link" to="/test">Link</Link>
        <Route path="/login" render={() => <LoginComponent />} />
        <PrivateRoute isAuthenticated component={TestComponent} path="/test" />
      </BrowserRouter>
    );

    expect(queryByText(/test/i)).toBeNull();
    userEvent.click(getByTestId('link'));
    expect(getByText(/test/i)).toBeInTheDocument();
  });

  test('if private route redirects to login when the user is not authenticated', () => {
    const { getByTestId, getByText, queryByText, } = render(
      <BrowserRouter>
        <Link data-testid="link" to="/test">Link</Link>
        <Link data-testid="home-link" to="/" />
        <Route path="/login" render={() => <LoginComponent />} />
        <PrivateRoute isAuthenticated={false} component={TestComponent} path="/test" />
      </BrowserRouter>
    );

    userEvent.click(getByTestId('home-link'));
    expect(queryByText(/test/i)).toBeNull();
    expect(queryByText(/login/i)).toBeNull();
    userEvent.click(getByTestId('link'));
    expect(queryByText(/test/i)).toBeNull();
    expect(getByText(/login/i)).toBeInTheDocument();
  });
});
