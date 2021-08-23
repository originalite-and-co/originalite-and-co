import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Dropdown from '../../../components/Dropdown/Dropdown';
import Filter from '../Filter/Filter';
import ProductCard from '../../../components/ProductCard/ProductCard';

import InfiniteScroll from 'react-infinite-scroll-component';

import constants from '../../../constants';
import useWindowSize from '../../../hooks/useWindowSize';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { isAnyDropdownOpenActions, isAnyDropdownOpenSelectors } from '../../../../redux/features/dropdown';

import { CircularProgress, Typography } from '@material-ui/core';
import FilterIcon from '../../../assets/icons/Filter';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';


Products.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
  })),
  productsQuantity: PropTypes.number.isRequired,
  loadMoreProducts: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

function Products({ categoryTitle, products, productsQuantity, loadMoreProducts, isLoaded }) {

  const [isDesktop, setDesktop] = useState(false);
  const [isDropdownActive, setActiveDropdown] = useState(false);

  const { width } = useWindowSize();
  const dispatch = useDispatch();

  const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  useEffect(() => {
    if (!isAnyDropdownOpen) {
      setActiveDropdown(false);
    }
  }, [isAnyDropdownOpen]);

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(() => {
    if (isDesktop) {
      setActiveDropdown(false);
      dispatch(isAnyDropdownOpenActions.closedDropdown());
    }
  }, [isDesktop]);

  const handleButtonClick = (event) => {
    if (isDropdownActive) {
      setActiveDropdown(false);
      dispatch(isAnyDropdownOpenActions.closedDropdown());
      return;
    }

    setActiveDropdown(true);
    dispatch(isAnyDropdownOpenActions.openedDropdown());
  };

  const productList = products?.map((product) => {
    return (
      <ProductCard key={products._id} product={product} />
    );
  });

  return (
    <>
      {
        isDesktop && (
          <Typography
            component='h2'
            variant='h5'
            className={classes.heading}
          >
            {categoryTitle}
          </Typography>
        )
      }

      {
        !isDesktop && (
          <>
            <button onClick={handleButtonClick} className={classes.filterBtn}>
              <FilterIcon viewBox='0 0 32 32' className={classes.filterIcon} />
              Filters
            </button>
          </>
        )
      }

      {
        productList?.length ?
          (
            <InfiniteScroll
              next={loadMoreProducts}
              hasMore={products.length < productsQuantity}
              className={classes.productListWrapper}
              loader={<CircularProgress className={classes.loader} color='primary' />}
              dataLength={products.length}
            >

              {productList}
            </InfiniteScroll>
          ) : (
            isLoaded ?
              (
                <Typography className={classes.noItemsAlert} component='p' variant='h3'>
                  There are no items that match such filters
                </Typography>
              ) : (
                <CircularProgress className={classes.productsLoader} color='primary' />
              )
          )
      }

      <Dropdown
        isActive={isDropdownActive}
        classNames={{
          closed: classes.dropdown,
          active: classes.dropdownActive,
        }}
        children={<Filter />}
        lockBodyScrolling
      />
    </>
  );
}

export default Products;