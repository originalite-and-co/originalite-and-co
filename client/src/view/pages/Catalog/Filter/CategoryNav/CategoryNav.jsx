import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import getAllChildCategories from '../../../../utils/getAllChildCategories';
import { catalogRequests } from '../../../../../api/server';
import useAsyncError from '../../../../hooks/useAsyncError';
import generateCategoryPath from '../../../../utils/generateCategoryPath';

import { NavLink } from 'react-router-dom';

import { Box, List, ListItem, Typography } from '@material-ui/core';
import classes from './CategoryNav.module.scss';

CategoryNav.propTypes = {
  parentCategoryId: PropTypes.string.isRequired,
  parentCategoryName: PropTypes.string.isRequired,
};

function CategoryNav({ parentCategoryId, parentCategoryName }) {
  const [catalog, setCatalog] = useState([]);
  const throwAsyncError = useAsyncError();

  useEffect(() => {
    catalogRequests.retrieveCatalog().then(
      (catalog) => setCatalog(catalog),
      (error) => throwAsyncError(error),
    );
  }, []);

  const categories = getAllChildCategories(catalog, parentCategoryId);

  const categoryList = categories?.map(({ _id, id, name }) => {
    return (
      <ListItem disableGutters className={classes.listItem} key={_id}>
        <NavLink
          activeClassName={classes.activeLink}
          className={classes.link}
          to={`/catalog/${generateCategoryPath({
            id,
            parentId: parentCategoryId,
          })}`}
          replace
        >
          {name}
        </NavLink>
      </ListItem>
    );
  });

  return (
    <Box className={classes.root}>
      <Typography className={classes.heading} component="h4" variant="h6">
        {parentCategoryName}
      </Typography>
      <List className={classes.list}>{categoryList}</List>
    </Box>
  );
}

export default CategoryNav;
