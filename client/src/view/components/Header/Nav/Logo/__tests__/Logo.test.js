import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from 'react-dom';
import Logo from '../Logo';

it('it renders Logo without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>,
    div
  );

  ReactDom.unmountComponentAtNode(div);
});

it('it has an alt text', () => {
  const div = document.createElement('div');

  const altText = screen.getByAltText;
  ReactDom.render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
});

// test('it renders Logo without crashing', () => {
//   render(<Logo />);
//   const alttext = screen.getByAltText('Logo');
//   expect(alttext).toBeInTheDocument();
// });
