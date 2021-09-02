import React, { useEffect, useState } from 'react';

import ProductInfo from './Sections/ProductInfo';
import ProductImageSlider from './Sections/ProductImageSlider';
import ViewedProducts from './Sections/ViewedProducts';

import { productRequests, sizeRequests } from '../../../api/server';
import useAsyncError from '../../hooks/useAsyncError';

import ProductStyles from './Product.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  wishlistOperations,
  wishlistSelectors
} from '../../../redux/features/wishlist';
import { authorizationSelectors } from '../../../redux/features/authorization';
import { useRouteMatch } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [availableSizes, setAvailableSizes] = useState([]);
  const isAuthorized = useSelector(authorizationSelectors.authorization);

  const dispatch = useDispatch();
  const { params, url } = useRouteMatch();

  const itemNumber = params.itemNumber;

  const throwAsyncError = useAsyncError();
  const wishlistState = useSelector(wishlistSelectors.getWishlist);

  let wishlistIDs;

  if (isAuthorized) {
    wishlistIDs = wishlistState.map((product) => product._id);
  } else {
    wishlistIDs = [];
  }

  useEffect(() => {
    dispatch(wishlistOperations.gotWishlist());
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    sizeRequests.retrieveSizes().then(
      (sizes) => {
        setAvailableSizes(sizes.map((size) => size.name));
      },
      (error) => throwAsyncError(error)
    );
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    productRequests.retrieveProductByItemNumber(itemNumber).then(
      (product) => {
        setProduct(product);
        setIsLoaded(true);
      },
      (error) => throwAsyncError(error)
    );
  }, [url]);

  return isLoaded ? (
    <section className={`${ProductStyles.root} wrapper`}>
      <div className={ProductStyles.content}>
        <ProductImageSlider detail={product} />
        <ProductInfo
          detail={product}
          availableSizes={availableSizes}
          wishlistIDs={wishlistIDs}
        />
      </div>
      <h3 className={ProductStyles.viewed_title}>Recently viewed products</h3>
      <ViewedProducts activeProductNumber={itemNumber} />
    </section>
  ) : (
    <p>Loading...</p>
  );
}

export default Product;
