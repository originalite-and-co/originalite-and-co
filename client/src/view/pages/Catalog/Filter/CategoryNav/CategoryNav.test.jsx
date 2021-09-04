import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import CustomThemeProvider from '../../../../HOC/CustomThemeProvider/CustomThemeProvider';
import CategoryNav from './CategoryNav';
import { catalogRequests } from '../../../../../api/server';
import userEvent from '@testing-library/user-event';

const DATA = [
  {
    _id: '610a96b4180396f37c64e888',
    id: 'men-outwear',
    name: 'Outwear',
    parentId: 'men'
  }
];

describe('CategoryNav', () => {
  test('smoke', () => {
    const history = createBrowserHistory();
    catalogRequests.retrieveCatalog = jest.fn(() => Promise.resolve(DATA));

    const parentCategoryId = 'men';
    const parentCategoryName = 'Men';

    const { getByText } = render(
      <Router history={history}>
        <CustomThemeProvider>
          <CategoryNav
            parentCategoryId={parentCategoryId}
            parentCategoryName={parentCategoryName}
          />
        </CustomThemeProvider>
      </Router>
    );

    expect(getByText(parentCategoryName)).toBeInTheDocument();
    /**
     * setTimeout is used to wait until the state updates
     * */
    setTimeout(() => {
      expect(getByText(DATA[0].name)).toBeInTheDocument();
    }, 500);
  });

  test('If link redirects to another page', () => {
    const history = createBrowserHistory();
    catalogRequests.retrieveCatalog = jest.fn(() => Promise.resolve(DATA));

    const parentCategoryId = 'men';
    const parentCategoryName = 'Men';

    const { getByText } = render(
      <Router history={history}>
        <CustomThemeProvider>
          <CategoryNav
            parentCategoryId={parentCategoryId}
            parentCategoryName={parentCategoryName}
          />
        </CustomThemeProvider>
      </Router>
    );

    /**
     * setTimeout is used to wait until the state updates
     * */
    setTimeout(() => {
      expect(history.location.pathname).not.toMatch('/catalog/men/outwear');
      const link = getByText(DATA[0].name);
      userEvent.click(link);
      expect(history.location.pathname).toMatch('/catalog/men/outwear');
    }, 500);
  });
});
