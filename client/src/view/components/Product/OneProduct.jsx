import React, { useEffect, useState } from 'react';
import OneProductInfo from './Sections/OneProductInfo';
import ImageMagnify from './Sections/ImageMagnify';
import OneProductStyles from './OneProduct.module.scss';
import { useRouteMatch } from 'react-router-dom';
import { productRequests, sizeRequests } from '../../../api/server';
import useAsyncError from '../../hooks/useAsyncError';
import sizes from '../../../api/server/sizes';

function OneProduct() {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [availableSizes, setAvailableSizes] = useState([]);

  const { params } = useRouteMatch();
  const itemNumber = params.itemNumber;

  const throwAsyncError = useAsyncError();

  useEffect(() => {
    setIsLoaded(false);
    sizeRequests.retrieveSizes().then(
      (sizes) => {
        setAvailableSizes(sizes.map((size) => size.name));
      },
      (error) => throwAsyncError(error),
    );
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    productRequests.retrieveProductByItemNumber(itemNumber).then(
      (product) => {
        setProduct(product);
        setIsLoaded(true);
      },
      (error) => throwAsyncError(error),
    );
  }, []);

  return isLoaded ? (
    <section className="wrapper">
      <div className={OneProductStyles.main}>
        <ImageMagnify detail={product} />
        <OneProductInfo detail={product} availableSizes={availableSizes} />
      </div>
      <div>
        <h3>Recently viewed products</h3>
        <div className={OneProductStyles.images}></div>
      </div>
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default OneProduct;
