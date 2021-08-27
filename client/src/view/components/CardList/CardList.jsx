import ProductCard from '../ProductCard/ProductCard';
import styles from './CardList.module.scss';
import { useEffect, useState } from 'react';
import { productRequests } from '../../../api/server';
import useAsyncError from '../../hooks/useAsyncError';
import { Grid } from '@material-ui/core';

const CardList = () => {
  const [productList, setProductList] = useState([]);
  const [apiError, setApiError] = useState('');
  const throwError = useAsyncError();
  useEffect(() => {
    productRequests.retrieveProducts().then(
      (res) => setProductList(res),
      (error) => {
        throwError(error);
        setApiError(error);
      },
    );
  }, []);
  if (apiError) {
    return <div>ERROR</div>;
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      data-testid={'product-list'}
      className={styles.cardListCards}
    >
      {productList.map((product) => (
        <ProductCard size={6} product={product} key={product._id} />
      ))}
    </Grid>
  );
};

export default CardList;
