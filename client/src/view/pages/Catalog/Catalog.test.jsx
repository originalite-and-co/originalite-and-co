import { createBrowserHistory } from 'history';
import renderWithProjectProviders from '../../../utils/renderWithProjectProviders';
import Catalog from './Catalog';
import store from '../../../redux/store/store';

describe('Catalog', () => {
  test('Smoke', () => {
    const history = createBrowserHistory();

    const {} = renderWithProjectProviders(<Catalog />, store, history);
  });
});
