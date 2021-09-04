import CustomThemeProvider from '../../../../HOC/CustomThemeProvider/CustomThemeProvider';
import renderWithRedux from '../../../../../utils/renderWiithRedux';
import Color from './Color';
import store from '../../../../../redux/store/store';
import { filterActions } from '../../../../../redux/features/filters';
import userEvent from '@testing-library/user-event';

const DATA = {
  name: 'black',
  cssValue: '#000000',
  isDesktop: true
};
describe('Color', () => {
  test('smoke', () => {
    const { getByText } = renderWithRedux(
      <CustomThemeProvider>
        <Color {...DATA} />
      </CustomThemeProvider>,
      store
    );

    expect(getByText(DATA.name)).toBeInTheDocument();
  });

  test('If it calls filterActions function ', () => {
    filterActions.addFilter = jest.fn(() => ({
      type: 'test'
    }));
    const { getByTestId } = renderWithRedux(
      <CustomThemeProvider>
        <Color {...DATA} />
      </CustomThemeProvider>,
      store
    );

    const button = getByTestId('color-button');
    userEvent.click(button);
    expect(filterActions.addFilter).toHaveBeenCalled();
  });
});
