import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CatalogBreadcrumbs from './CatalogBreadcrumbs';
import CustomThemeProvider from '../../../HOC/CustomThemeProvider/CustomThemeProvider';
import userEvent from '@testing-library/user-event';

const PATH = '/catalog/men';
const CATEGORY_NAME = 'Men';
describe('Breadcrumbs', () => {
  test('Smoke', () => {
    const history = createBrowserHistory();
    const { getByText } = render(
      <Router history={history}>
        <CustomThemeProvider>
          <CatalogBreadcrumbs path={PATH} categoryName={CATEGORY_NAME} />
        </CustomThemeProvider>
      </Router>,
    );

    expect(getByText(/catalog/i)).toBeInTheDocument();
    expect(getByText(CATEGORY_NAME)).toBeInTheDocument();
  });

  test("if links redirect to another page", () => {
    const history = createBrowserHistory();
    history.push(PATH)
    const { getByText } = render(
      <Router history={history}>
        <CustomThemeProvider>
          <CatalogBreadcrumbs path={PATH} categoryName={CATEGORY_NAME} />
        </CustomThemeProvider>
      </Router>,
    );

    expect(history.location.pathname).toMatch(PATH);
    const link = getByText(/catalog/i);
    userEvent.click(link);
    expect(history.location.pathname).toMatch("/catalog");
  })
});