import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import CatalogNav from '../CatalogNav';

it('renders CatalogNav without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <CatalogNav />
    </BrowserRouter>,
    div
  );

  ReactDom.unmountComponentAtNode(div);
});
