import PropTypes from 'prop-types';
import styles from './CategoryCard.module.scss';
import { Box, Grid, Typography } from '@material-ui/core';

CategoryCard.propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};

function CategoryCard({ product, size }) {
  const {img, name} = product;
  return (
    <Grid component='li' item xs={size} className={styles.categoryCard}>
      <Box component="picture" className={styles.imageWrapper}>
        <img src={img} alt={name} />
      </Box>
      <Typography component="p" variant='h5'>{name}</Typography>
    </Grid>
  );
}

export default CategoryCard;