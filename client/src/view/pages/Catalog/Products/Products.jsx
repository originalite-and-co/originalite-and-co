import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import constants from '../../../constants';
import useWindowSize from '../../../hooks/useWindowSize';
import CatalogBreadcrumbs from '../Breadcrumbs/CatalogBreadcrumbs';
import { useHistory } from 'react-router-dom';
import FilterIcon from '../../../assets/icons/Filter';

import classes from './Products.module.scss';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { isAnyDropdownOpenActions, isAnyDropdownOpenSelectors } from '../../../../redux/features/dropdown';
import ProductCard from '../../../components/ProductCard/ProductCard';
import InfiniteScroll from 'react-infinite-scroll-component';

Products.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
  })),
  loadMoreProducts: PropTypes.func.isRequired,
};

function Products({ categoryTitle, products, loadMoreProducts }) {

  const [isDesktop, setDesktop] = useState(false);
  const [isDropdownActive, setActiveDropdown] = useState(false);
  const { location } = useHistory();

  const { width } = useWindowSize();
  const dispatch = useDispatch();

  const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

  useEffect(() => {
    if (!isAnyDropdownOpen) {
      setActiveDropdown(false);
    }
  }, [isAnyDropdownOpen]);

  useEffect(() => {
    setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  useEffect(useCallback(() => {
    if (isDesktop) {
      setActiveDropdown(false);
      dispatch(isAnyDropdownOpenActions.closedDropdown());
    }
  }, [isDesktop]), [isDesktop]);

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
      <ProductCard product={product} size={isDesktop ? 4 : 6} />
    );
  });

  return (
    <>
      {isDesktop && (
        <Typography
          component='h2'
          variant='h5'
          className={classes.heading}
        >
          {categoryTitle}
        </Typography>
      )}

      {
        !isDesktop && (
          <>
            <CatalogBreadcrumbs path={location.pathname} />
            <button onClick={handleButtonClick} className={classes.filterBtn}>
              <FilterIcon viewBox='0 0 32 32' className={classes.filterIcon} />
              Filters
            </button>
          </>
        )
      }
      {productList?.length ?
        (
          <Grid
            id='productListContainer'
            container
            component='ul'
            spacing={6}
          >

            <InfiniteScroll
              next={loadMoreProducts}
              hasMore={true}
              loader={<p>Loading ...</p>}
              dataLength={products.length}
              scrollableTarget='productListContainer'
            >

              {productList}
            </InfiniteScroll>
          </Grid>

        ) : (
          <Typography className={classes.noItemsAlert} component='p' variant='h3'>
            There is no items that match such filters
          </Typography>
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