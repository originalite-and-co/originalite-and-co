import PropTypes from "prop-types";
import "./ProductCard.scss";

export const ProductCard = ({product}) => {

  return (
    <div className={"product-card"}>
            <div className={"product-card__image"}><img src={product.imageUrls[0]} alt="products images"/></div>
            <p className={"product-card__title"}>{product.name}</p>
            <p className={"product-card__price"}>{product.currentPrice}</p>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

