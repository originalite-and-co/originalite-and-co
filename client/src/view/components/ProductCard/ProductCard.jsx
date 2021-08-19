import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import { Grid, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};

function ProductCard({ product, size }) {
  const [isDesktop, setDesktop] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  return (
    <Box className={styles.productCard}>
      <Link to={`/products/${product.itemNo}`} className={styles.link}>
        <div className={styles.productImage}>
          <img src={product.imageUrls[0]} alt='products images' />
        </div>
        <Typography
          color='primary'
          component='p'
          variant={isDesktop ? 'h6' : 'body2'}
          className={styles.productCardTitle}
        >
          {product.name}
        </Typography>
        <Typography
          component="p"
          variant={isDesktop ? 'h6': 'body2'}
          className={styles.productCardPrice}
        >
          {`${product.currentPrice} $`}
        </Typography>
      </Link>
    </Box>
  );
};


export default ProductCard;