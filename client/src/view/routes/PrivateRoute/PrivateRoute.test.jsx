import React from 'react';
import { render } from '@testing-library/react';
import { Route, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PrivateRoute from './PrivateRoute';
import { createBrowserHistory } from 'history';

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
  const history = createBrowserHistory();

  afterEach(() => {
    history.push('/');
  });

  test('Smoke', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Router history={history}>
        <Route path="/auth/login" render={() => <LoginComponent />} />
        <PrivateRoute isAuthenticated component={TestComponent} path="/test" />
      </Router>
    );

    expect(queryByText(/test/i)).toBeNull();
    history.push('/test');
    expect(getByText(/test/i)).toBeInTheDocument();
  });

  test('if private route redirects to login when the user is not authenticated', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Router history={history}>
        <Route path="/auth/login" render={() => <LoginComponent />} />
        <PrivateRoute
          isAuthenticated={false}
          component={TestComponent}
          path="/test"
        />
      </Router>
    );

    expect(queryByText(/test/i)).toBeNull();
    expect(queryByText(/login/i)).toBeNull();
    history.push('/test');
    expect(queryByText(/test/i)).toBeNull();
    expect(getByText(/login/i)).toBeInTheDocument();
  });
});
