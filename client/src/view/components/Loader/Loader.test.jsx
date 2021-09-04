import { render } from '@testing-library/react';
import CustomThemeProvider from '../../HOC/CustomThemeProvider/CustomThemeProvider';
import Loader from './Loader';

describe('Loader', () => {
  test('smoke', () => {
    const { getByTestId } = render(
      <CustomThemeProvider>
        <Loader />
      </CustomThemeProvider>
    );

    expect(getByTestId('loaderContainer')).toBeInTheDocument();
    expect(getByTestId('loader')).toBeInTheDocument();
  });
});
