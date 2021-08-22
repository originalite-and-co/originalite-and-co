import PropTypes from 'prop-types';
import styles from './CategoryCard.module.scss';
import { Box, Grid, Typography } from '@material-ui/core';

CategoryCard.propTypes = {
  product: PropTypes.object.isRequired,
};

function CategoryCard({ product, gridArea }) {
  const { img, name } = product;
  return (
    <Box sx={{
      gridArea: gridArea,
    }}
         className={styles.categoryCard}
    >
      <Box component='picture' className={styles.imageWrapper}>
        <img src={img} alt={name} />
      </Box>
      <Typography component='p' variant='h5'>{name}</Typography>
    </Box>
  );
}

export default CategoryCard;