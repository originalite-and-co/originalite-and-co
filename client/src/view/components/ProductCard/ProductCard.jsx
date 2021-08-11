import PropTypes from "prop-types";
import styles from "./ProductCard.module.scss";
import {Grid} from "@material-ui/core";


 const ProductCard = ({product}) => {
console.log(product.imageUrls[0]);
  return (
    <Grid item component={"li"} data-testid={"product-card"} className={styles.productCard}>
            <div className={styles.productImage}><img src={product.imageUrls[0]} alt="products images" width={"150px"} height={"auto"}/></div>
            <p className={styles.productCardTitle}>{product.name}</p>
            <p className={styles.productCardPrice}>{product.currentPrice}</p>
        </Grid>
    )
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard;