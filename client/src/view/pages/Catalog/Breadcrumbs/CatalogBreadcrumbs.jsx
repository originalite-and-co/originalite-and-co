import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

CatalogBreadcrumbs.propTypes = {
  path: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired
};

function CatalogBreadcrumbs({ path, categoryName }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  /**
   * This function generates links judging by the path name
   * @function filter() is here because split creates an empty string as the first element.
   * This is caused by the fact that the pathname starts with a /(slash)
   * @function map() creates <Link/> component;
   *
   * @description stringIndex variable looks for the index of the link in pathname.
   * This is required to avoid getting the same index in dividerIndex variable, as
   * indexOf method returns the index of the first matched character. So every time,
   * the searching will be started from another position.
   *
   * dividerIndex variable is required to be the end index of a slice method
   *
   */
  const links = path
    .split('/')
    .filter((link) => link.length)
    .filter((link) => link !== 'catalog')
    .map((link, index, array) => {
      const stringIndex = path.indexOf(link);
      const dividerIndex = path.indexOf('/', stringIndex);
      const currentLinkPath = path.slice(0, dividerIndex);
      const isLastOne = array.length === index + 1;
      return (
        <Link
          key={index}
          className={isLastOne ? `${classes.link} active` : classes.link}
          to={currentLinkPath}
        >
          {isLastOne ? categoryName : _.upperFirst(_.lowerCase(link))}
        </Link>
      );
    });

  return (
    <Breadcrumbs
      separator={
        <NavigateNext className={classes.separator} fontSize="small" />
      }
    >
      <Link className={classes.link} to="/">
        Home
      </Link>
      {links}
    </Breadcrumbs>
  );
}

export default CatalogBreadcrumbs;
