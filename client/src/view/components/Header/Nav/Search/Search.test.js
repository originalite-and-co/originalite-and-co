import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeExp from '../../../../../redux/store/store';
import React from 'react';
import Search from './Search';
import { render } from '@testing-library/react';
import CustomThemeProvider from '../../../../HOC/CustomThemeProvider/CustomThemeProvider';

const { store } = storeExp;

const TestSearch = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

test('Search component', () => {
  render(<TestSearch />);
});
