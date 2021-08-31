import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {
  CatalogNavButton,
  CatalogNavLink,
} from '../CatalogNav/LinkButtonGenerators';
import styles from './MainCategoryLink.module.scss';
import { ListItem } from '@material-ui/core';

MainCategoryLink.propTypes = {
  category: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
  }).isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isDropdownActive: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

function MainCategoryLink({
  category,
  isDesktop,
  onHover,
  onClick,
  isDropdownActive,
}) {
  return (
    <ListItem className={styles.navItem} key={category._id}>
      {isDesktop ? (
        <CatalogNavLink
          pathTo={`/catalog/${category.id}`}
          handleHover={(e) => onHover(e, category.id)}
          styles={
            isDropdownActive ? `${styles.navItemBtn} active` : styles.navItemBtn
          }
          text={category.name}
        />
      ) : (
        <CatalogNavButton
          onClickFunc={(e) => onClick(e, category.id)}
          styles={
            isDropdownActive ? `${styles.navItemBtn} active` : styles.navItemBtn
          }
          text={category.name}
        />
      )}
    </ListItem>
  );
}

export default MainCategoryLink;
