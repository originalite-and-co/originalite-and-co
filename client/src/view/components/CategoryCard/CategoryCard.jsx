import PropTypes from 'prop-types';
import styles from './CategoryCard.module.scss';
import { Box, Typography } from '@material-ui/core';
import generateCategoryPath from '../../utils/generateCategoryPath';
import { Link } from 'react-router-dom';

CategoryCard.propTypes = {
  product: PropTypes.object.isRequired
};

function CategoryCard({ product, gridArea }) {
  const { img, name } = product;
  return (
    <Box
      sx={{
        gridArea: gridArea
      }}
      className={styles.categoryCard}
    >
      <Link
        to={`/catalog/${generateCategoryPath(product)}`}
        className={styles.link}
      >
        <Box component="picture" className={styles.imageWrapper}>
          <img src={img} alt={name} />
        </Box>
        <Box className={styles.nameWrapper}>
          <Typography
            className={styles.name}
            component="p"
            variant="body2"
            color="textPrimary"
          >
            {name}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}

export default CategoryCard;
