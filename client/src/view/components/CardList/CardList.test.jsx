import CardList from './CardList';
import { render } from '@testing-library/react';

// const testComp = ()=> <p>Hello World </p>
jest.mock('../ProductCard/ProductCard.jsx', () => () => <p>Hello World</p>);
describe('CardList', () => {
  test('if component renders successfully', () => {
    const { getByTestId } = render(<CardList />);
    expect(getByTestId('product-list')).toBeInTheDocument();
  });
});
