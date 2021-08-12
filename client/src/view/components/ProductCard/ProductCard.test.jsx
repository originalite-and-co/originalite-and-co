import {render} from "@testing-library/react";
import ProductCard from "./ProductCard";


// jest.mock("./ProductCard.jsx", ()=> ()=> <p>Hello</p> )
describe('ProductCard', (   )=> {
    test('if component renders successfully', () => {
const products = {imageUrls: [1,2]}
        const {getByTestId} =  render(
            <ProductCard product={products}/>
        )
        expect(getByTestId('product-card')).toBeInTheDocument()
    })

    test('if classname renders properly', ()=> {
        const {getByTestId} = render(
            <ProductCard/>
        )
        expect(getByTestId('product-card')).toHaveClass('product-card')
    })
})