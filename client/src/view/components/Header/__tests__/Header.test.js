import { render, screen } from '@testing-library/react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

test('Header renders children', () => {
  render(<Header />);
  const childEl = screen.getByAltText('Logo');
  expect(childEl).toBeInTheDocument();
});

it('renders Header without crashing', () => {
  const div = document.createElement('div');

  ReactDom.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
    div
  );

  ReactDom.unmountComponentAtNode(div);
});
