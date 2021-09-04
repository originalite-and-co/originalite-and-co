<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';

import { Link, NavLink } from 'react-router-dom';
import styles from './CatalogNav.module.scss';
import mainCategoryLinkStyles from '../MainCategoryLink/MainCategoryLink.module.scss';
=======
import React, { useCallback, useEffect, useState } from 'react';

import {NavLink} from 'react-router-dom';
>>>>>>> origin/develop

import useWindowSize from '../../../hooks/useWindowSize';
import useAsyncError from '../../../hooks/useAsyncError';
import { useDispatch, useSelector } from 'react-redux';
import { catalogRequests } from '../../../../api/server';
import constants from '././.././.././../constants';
import {
  isAnyDropdownOpenActions,
  isAnyDropdownOpenSelectors
} from '../../../../redux/features/dropdown';
import getAllChildCategories from '../../../utils/getAllChildCategories';
import generateCategoryPath from '../../../utils/generateCategoryPath';

import Box from '@material-ui/core/Box';
import { Grid, List } from '@material-ui/core';
import Dropdown from '../../Dropdown/Dropdown';
import MainCategoryLink from '../MainCategoryLink/MainCategoryLink';
import AllCategories from '../AllCategories/AllCategories';

<<<<<<< HEAD
function CatalogNav() {
=======
import { generateStyles } from './styles';
import { makeStyles } from '@material-ui/styles';
import Styles from './Styles.module.scss';

function CatalogNav() {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

>>>>>>> origin/develop
  const [catalog, setCatalog] = useState([]);
  const [categoryLinks, setCategoryLinks] = useState([]);
  const [isDropdownActive, setActiveDropdown] = useState(false);
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [isDesktop, setIsDesktop] = useState();

  const { width } = useWindowSize();
  const throwError = useAsyncError();

  const dispatch = useDispatch();
  const isAnyDropdownOpen = useSelector(
    isAnyDropdownOpenSelectors.getIsAnyDropdownOpen
  );

  useEffect(
    useCallback(() => {
      if (!isAnyDropdownOpen) {
        setActiveDropdown(false);
      }
    }, [isAnyDropdownOpen, isDropdownActive]),
    [isAnyDropdownOpen, isDropdownActive]
  );

  useEffect(
    useCallback(() => {
      catalogRequests.retrieveCatalog().then(
        (data) => setCatalog(data),
        (error) => throwError(error)
      );
    }, [catalog]),
    []
  );

  useEffect(() => {
    setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
  }, [width]);

  const handleCategoryLinkClick = (event) => {
    document.body.classList.remove('lock-scroll');
    setActiveDropdown(false);
    dispatch(isAnyDropdownOpenActions.closedDropdown());
  };

  const handleMainCategoryLinkAction = (event, linkId) => {
    const isLinkTheSame = linkId === activeLinkId;

    if (isDropdownActive && !isLinkTheSame && activeLinkId !== null) {
      setTimeout(() => {
        setActiveDropdown(false);
      }, 0);
      setTimeout(() => {
        renderCategoryLinks(linkId);
      }, 0);
      setTimeout(() => {
        dispatch(isAnyDropdownOpenActions.closedDropdown());
      }, 0);
      setTimeout(() => {
        dispatch(isAnyDropdownOpenActions.openedDropdown());
      }, 0);
      setTimeout(() => {
        setActiveDropdown(true);
      }, 0);
      setActiveLinkId(linkId);
    }

<<<<<<< HEAD
    if (isDropdownActive) {
      dispatch(isAnyDropdownOpenActions.closedDropdown());
      setActiveDropdown(false);
      setActiveLinkId(linkId);
    } else {
      renderCategoryLinks(linkId);
      //close all dropdowns that are active
      dispatch(isAnyDropdownOpenActions.closedDropdown());
=======
        if (isDropdownActive) {
            dispatch(isAnyDropdownOpenActions.closedDropdown())
            setActiveDropdown(false)
            setActiveLinkId(linkId)
        } else {
            renderCategoryLinks(linkId)
            //close all dropdowns that are active
            dispatch(isAnyDropdownOpenActions.closedDropdown());
>>>>>>> origin/develop

      /**
       * These setTimeouts are important for functionality,
       * as they are asynchronous and somehow guarantee that the code
       * in their callback will be executed only
       * when call stack in event loop is empty. This means that
       * all setState and useEffect callbacks will be executed properly
       */
      setTimeout(() => {
        dispatch(isAnyDropdownOpenActions.openedDropdown());
      }, 0);
      setTimeout(() => {
        setActiveDropdown(true);
      }, 0);

      setTimeout(() => {
        setActiveLinkId(linkId);
      });
    }
<<<<<<< HEAD

    // setActiveDropdown(!isDropdownActive)
    // setActiveLinkId(linkId)
=======
>>>>>>> origin/develop
  };

  const renderCategoryLinks = (linkId) => {
    const categories = getAllChildCategories(catalog, linkId);
    setCategoryLinks(
      categories.map((category) => {
        return (
          <Grid
            item
            key={category._id}
<<<<<<< HEAD
            className={styles.categoryListItem}
=======
            className={classes.categoryListItem}
>>>>>>> origin/develop
            component="li"
            xs={2}
          >
            <NavLink
              to={`/catalog/${generateCategoryPath(category)}`}
<<<<<<< HEAD
              className={styles.categoryLink}
              activeClassName={styles.categoryLinkActive}
=======
              className={Styles.categoryLink}
              activeClassName={classes.categoryLinkActive}
>>>>>>> origin/develop
              onClick={handleCategoryLinkClick}
            >
              {category.name}
            </NavLink>
          </Grid>
        );
      })
    );
  };

  const mainCategoryLinks = catalog
    .filter((category) => category.parentId === 'null')
    .map((category) => {
      return (
        <MainCategoryLink
          key={category._id}
          category={category}
          onHover={handleMainCategoryLinkAction}
          isDesktop={isDesktop}
          isDropdownActive={isDropdownActive}
          onClick={handleMainCategoryLinkAction}
        />
      );
    });

  let dropdownContent;
  if (categoryLinks.length) {
    dropdownContent = (
<<<<<<< HEAD
      <Box component="nav" className={`${styles.categoryNav} wrapper`}>
        {isDesktop && <p className={styles.categoriesTitle}>Categories</p>}
        <Grid
          container
          component="ul"
          className={styles.categoryList}
=======
      <Box component="nav" className={`${classes.categoryNav} wrapper`}>
        {isDesktop && <p className={classes.categoriesTitle}>Categories</p>}
        <Grid
          container
          component="ul"
          className={classes.categoryList}
>>>>>>> origin/develop
          data-testid="dropdown-content"
          direction="column"
          alignItems="flex-start"
          wrap={isDesktop ? 'wrap' : 'nowrap'}
          spacing={5}
        >
          {categoryLinks}
        </Grid>
      </Box>
    );
  }

  const renderMainCategoryLinks = (numberOfLinks) => {
    if (mainCategoryLinks.length > numberOfLinks) {
      const mainCategoryLinksCopy = [...mainCategoryLinks];
      mainCategoryLinksCopy.splice(numberOfLinks, Infinity, <AllCategories />);
      return mainCategoryLinksCopy;
    }

    return mainCategoryLinks;
  };

  return (
    <List
      disablePadding
      className={
        isDesktop
<<<<<<< HEAD
          ? styles.catalogNavWrapper
          : `${styles.catalogNavWrapper} wrapper`
=======
          ? classes.catalogNavWrapper
          : `${classes.catalogNavWrapper} wrapper`
>>>>>>> origin/develop
      }
      data-testid="catalog-nav"
    >
      {renderMainCategoryLinks(3)}
      <Dropdown
        classNames={{
<<<<<<< HEAD
          closed: styles.dropdown,
          active: styles.dropdownActive
=======
          closed: classes.dropdown,
          active: classes.dropdownActive
>>>>>>> origin/develop
        }}
        lockBodyScrolling
        isActive={isDropdownActive}
        onMouseLeave={() => {
          if (isDesktop) {
            dispatch(isAnyDropdownOpenActions.closedDropdown());
            setActiveDropdown(false);
          }
        }}
        children={dropdownContent}
      />
    </List>
  );
}

export default CatalogNav;
