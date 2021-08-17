import PropTypes from "prop-types";
import styles from "./ProductCard.module.scss";
import {Grid} from "@material-ui/core";

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    size:PropTypes.number.isRequired
}
 function ProductCard({product,size}) {

  return (
    <Grid item component={"li"} data-testid={"product-card"} xs={size} className={styles.productCard}>
            <div className={styles.productImage}><img src={product.imageUrls[0]} alt="products images"/></div>
            <p className={styles.productCardTitle}>{product.name}</p>
            <p className={styles.productCardPrice}>{product.currentPrice}</p>
        </Grid>
    )
};



export default ProductCard;