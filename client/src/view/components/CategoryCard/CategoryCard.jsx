import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss"
import {Grid} from "@material-ui/core";

CategoryCard.propTypes = {
    product: PropTypes.object.isRequired,
    size:PropTypes.number.isRequired
}

function CategoryCard ({product,size}){
    return (
        <Grid item xs={size} className={styles.CategoryCard}>
        <div >
            <div><img style={{maxWidth: "100%"}} src={product.img} alt="products images"/></div>
            <p>{product.name}</p>
        </div>
        </Grid>
    )
}

export default CategoryCard;