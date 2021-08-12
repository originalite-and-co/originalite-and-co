import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss"
import {Grid} from "@material-ui/core";
const CategoryCard = ({product,size}) => {

    return (
        <Grid item xs={size} className={styles.CategoryCard}>
        <div >
            <div><img src={product.img} width="102px"
                height="127px"  alt="products images"/></div>
            <p>{product.name}</p>
        </div>
        </Grid>
    )
}

CategoryCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default CategoryCard;