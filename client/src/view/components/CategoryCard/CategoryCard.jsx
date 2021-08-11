import PropTypes from "prop-types";
import styles from "./CategoryCard.module.scss"
const CategoryCard = ({product}) => {

    return (
        <div className={styles.CategoryCard}>
        <div >
            <div><img src={product.img} width="102px"
                height="127px"  alt="products images"/></div>
            <p>{product.name}</p>
        </div>
        </div>
    )
}

CategoryCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default CategoryCard;