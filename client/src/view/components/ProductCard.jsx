export const ProductCard = ({product}) => {

  return (
    <div>
            <div className={"product-card__image"}>{product.name}</div>
            <h1 className={"product-card__title"}>{product.name}</h1>
            <p className={"product-card__price"}>{product.currentPrice}</p>
        </div>
    )
}

