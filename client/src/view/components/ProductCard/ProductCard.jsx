import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
<<<<<<< HEAD
import { Typography, Box } from '@material-ui/core';
=======
import { Box, Typography } from '@material-ui/core';
>>>>>>> origin/develop
import { Link, useRouteMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import constants from '../../constants';

ProductCard.propTypes = {
<<<<<<< HEAD
  product: PropTypes.object.isRequired
=======
  product: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired
>>>>>>> origin/develop
};

function ProductCard({ product }) {
  const [isDesktop, setDesktop] = useState(false);

  const { width } = useWindowSize();
  const { path } = useRouteMatch();

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  const handleClick = () => {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem('recentlyViewed')
    );
    if (dataFromLocalStorage?.length === 10) {
      dataFromLocalStorage.shift();
    }
<<<<<<< HEAD
    let data = [product.itemNo];
    if (Array.isArray(dataFromLocalStorage)) {
      data = [...dataFromLocalStorage, product.itemNo];
=======
    let data = [product];
    if (Array.isArray(dataFromLocalStorage)) {
      dataFromLocalStorage.some((item) => item.itemNo === product.itemNo)
        ? (data = [...dataFromLocalStorage])
        : (data = [...dataFromLocalStorage, product]);
>>>>>>> origin/develop
    }
    localStorage.setItem('recentlyViewed', JSON.stringify(data));
  };

  return (
    <Box
      data-testid="product-card"
      className={styles.productCard}
      onClick={handleClick}
    >
      <Link to={`/products/${product.itemNo}`} className={styles.link}>
        <div className={styles.productImage}>
          <img src={product.imageUrls[0]} alt="products images" />
        </div>
        <Typography
          color={path === '/' ? 'textPrimary' : 'textSecondary'}
          component="p"
          variant={isDesktop ? 'h6' : 'body2'}
          className={styles.productCardTitle}
        >
          {product.name}
        </Typography>
        <Typography
          component="p"
          variant={isDesktop ? 'h6' : 'body2'}
          className={styles.productCardPrice}
        >
          ${product.currentPrice}
        </Typography>
      </Link>
    </Box>
  );
}

export default ProductCard;
