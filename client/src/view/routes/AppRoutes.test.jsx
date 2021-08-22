import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import renderWithProjectProviders from '../../utils/renderWithProjectProviders';
import store from '../../redux/store/store';

jest.mock('../pages/Authentication/Authentication.jsx', () => () => (
  <p>Authentication</p>
));
jest.mock('../pages/Cart/Cart.jsx', () => () => <p>Cart</p>);
jest.mock('../pages/Catalog/Catalog.jsx', () => () => <p>Catalog</p>);
jest.mock('../pages/Checkout/Checkout.jsx', () => () => <p>Checkout</p>);
jest.mock('../pages/Home/Home.jsx', () => () => <p>Home</p>);
jest.mock('../pages/Member/Member.jsx', () => () => <p>Member</p>);
jest.mock('../pages/Page404/Page404.jsx', () => () => <p>404</p>);
jest.mock('../pages/Product/OneProduct.jsx', () => () => <p>Product</p>);

/**
 * Regular expression is used to check if component includes written text.
 * Flag "i" means that there is no difference between upper or lowercase.
 *
 * @example getByText(/test/i) - this func will look through rendered components and find one
 * that includes test, Test, TEST ... content
 *
 * */
describe('AppRoutes', () => {
  const history = createBrowserHistory();

  beforeEach(() => {
    history.push('/');
    sessionStorage.clear();
  });

  test('if it renders home page', () => {
    const { getByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(getByText(/home/i)).toBeInTheDocument();
  });

  test("if it renders authentication page when pathname is '/auth/login' ", () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(queryByText(/authentication/i)).toBeNull();
    history.push('/auth/login');
    expect(queryByText(/authentication/i)).toBeInTheDocument();
  });

  test("if it renders authentication page when pathname is '/auth/register' ", () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(queryByText(/authentication/i)).toBeNull();
    history.push('/auth/register');
    expect(queryByText(/authentication/i)).toBeInTheDocument();
  });

  test('if it renders cart page ', () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(queryByText(/cart/i)).toBeNull();
    history.push('/cart');
    expect(queryByText(/cart/i)).toBeInTheDocument();
  });

  test('if it renders catalog page ', () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(queryByText(/catalog/i)).toBeNull();
    history.push('/catalog/men');
    expect(queryByText(/catalog/i)).toBeInTheDocument();
  });

  // test("if it renders product page", () => {
  //     const {debug, queryByText} = render(
  //         <Router history={history}>
  //             <AppRoutes/>
  //         </Router>
  //     );
  //
  //     expect(queryByText(/product/i)).toBeNull();
  //     history.push("/catalog/12498");
  //     expect(queryByText(/product/i)).toBeInTheDocument();
  // });

  test("if it doesn't render checkout page without token", () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(sessionStorage.getItem('token')).toBeNull();
    expect(queryByText(/authentication/i)).toBeNull();
    expect(queryByText(/checkout/i)).toBeNull();
    history.push('/checkout');
    expect(history.location.pathname).toMatch(/login/);
    expect(queryByText(/checkout/i)).toBeNull();
    expect(queryByText(/authentication/i)).toBeInTheDocument();
  });

  test('if it renders checkout page with token', () => {
    const tokenValue = 'test';
    sessionStorage.setItem('token', tokenValue);

    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(sessionStorage.getItem('token')).toMatch(tokenValue);
    expect(queryByText(/authentication/i)).toBeNull();
    expect(queryByText(/checkout/i)).toBeNull();
    history.push('/checkout');
    expect(history.location.pathname).toMatch(/checkout/);
    expect(queryByText(/checkout/i)).toBeInTheDocument();
    expect(queryByText(/authentication/i)).toBeNull();
  });

  test("If it doesn't render member page without token", () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(sessionStorage.getItem('token')).toBeNull();
    expect(queryByText(/authentication/i)).toBeNull();
    expect(queryByText(/member/i)).toBeNull();
    history.push('/member');
    expect(history.location.pathname).toMatch(/login/);
    expect(queryByText(/member/i)).toBeNull();
    expect(queryByText(/authentication/i)).toBeInTheDocument();
  });

  test('If it renders member page with token', () => {
    const tokenValue = 'test';
    sessionStorage.setItem('token', tokenValue);

    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(sessionStorage.getItem('token')).toMatch(tokenValue);
    expect(queryByText(/authentication/i)).toBeNull();
    expect(queryByText(/member/i)).toBeNull();
    history.push('/member');
    expect(history.location.pathname).toMatch(/member/);
    expect(queryByText(/member/i)).toBeInTheDocument();
    expect(queryByText(/authentication/i)).toBeNull();
  });

  test("if it renders Page404 when the pathname doesn't match any Route", () => {
    const { queryByText } = renderWithProjectProviders(
      <AppRoutes />,
      store,
      history
    );

    expect(queryByText(/404/i)).toBeNull();
    history.push('/incorrect-route-at-all');
    expect(queryByText(/404/i)).toBeInTheDocument();
  });
});
