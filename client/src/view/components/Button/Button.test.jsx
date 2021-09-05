import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store/store';
import React from 'react';
import Button from './Button';

const fn = jest.fn();
const TestButton = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Button onClick={fn} text="hello world" />
      </Provider>
    </BrowserRouter>
  );
};
describe('Button component', () => {
  test('should render the Button component', () => {
    render(<TestButton />);
  });
  test('should have the text provided via props', () => {
    render(<TestButton />);
    const btnText = screen.getByText('hello world');
    expect(btnText).toBeInTheDocument();
  });
});
