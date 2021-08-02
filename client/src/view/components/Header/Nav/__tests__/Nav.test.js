import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Nav';

it('renders Nav without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
    div
  );

  ReactDom.unmountComponentAtNode(div);
});
