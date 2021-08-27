import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// jest.mock("./ProductCard.jsx", ()=> ()=> <p>Hello</p> )
describe('ProductCard', () => {
  test('if component renders successfully', () => {
    const products = { imageUrls: [1, 2] };
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <ProductCard size={4} product={products} />
      </Router>,
    );
    expect(getByTestId('product-card')).toBeInTheDocument();
  });
});
