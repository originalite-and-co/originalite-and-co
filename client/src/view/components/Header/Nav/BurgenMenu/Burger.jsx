<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Dropdown from '../../../Dropdown/Dropdown';
import { ListItem, ListItemUpper } from '../BurgerListItem/ListItem';
import Social from '../Social/Social';

import styles from './Burger.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  isAnyDropdownOpenActions,
  isAnyDropdownOpenSelectors
} from '../../../../../redux/features/dropdown';

function Burger() {
  const [isDropdownActive, setActiveDropdown] = useState(false);
  // const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const dispatch = useDispatch();
  const isAnyDropdownOpen = useSelector(
    isAnyDropdownOpenSelectors.getIsAnyDropdownOpen
  );
=======
import React, {useCallback, useEffect, useState} from 'react';

import Box from '@material-ui/core/Box';
import Dropdown from "../../../Dropdown/Dropdown";
import {ListItemUpper} from "../BurgerListItem/ListItem";
import Social from "../Social/Social";

import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../../redux/features/dropdown";
import {catalogRequests} from "../../../../../api/server";
import useAsyncError from "../../../../hooks/useAsyncError";
import {Link, NavLink} from "react-router-dom";
import {authorizationSelectors} from "../../../../../redux/features/authorization";
import {makeStyles} from "@material-ui/styles";
import {generateStyles} from './BurgerStyles'

function Burger() {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()

    const [isDropdownActive, setActiveDropdown] = useState(false);
    const [catalog, setCatalog] = useState([]);
    const dispatch = useDispatch();
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);
    const throwError = useAsyncError()
    const authorization = useSelector(authorizationSelectors.authorization)
    const [isAuthorized] = useState(authorization)
>>>>>>> origin/develop

  useEffect(() => {
    if (!isAnyDropdownOpen) {
      setActiveDropdown(false);
    }
  }, [isAnyDropdownOpen, isDropdownActive]);

<<<<<<< HEAD
  const handleBurgerIconClick = (event) => {
    if (isDropdownActive) {
      dispatch(isAnyDropdownOpenActions.closedDropdown());
      setActiveDropdown(false);
    } else {
      dispatch(isAnyDropdownOpenActions.closedDropdown());
=======
    useEffect(useCallback(() => {
        catalogRequests.retrieveCatalog()
            .then(
                data => setCatalog(data),
                error => throwError(error)
            );
    }, [catalog]), []);

    const mainCategoryLinks = catalog
        .filter(category => category.parentId === 'null')
        .map(category => (
            <ListItemUpper
                catalog={catalog}
                key={category._id}
                category={category}
                text={category.name}
            />
        ))


    const handleBurgerIconClick = (event) => {
        if (isDropdownActive) {
            dispatch(isAnyDropdownOpenActions.closedDropdown());
            setActiveDropdown(false);
        } else {
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
    }
  };

<<<<<<< HEAD
  const burgerDropdownContent = (
    <>
      <Box className={`${styles.auth} wrapper`}>
        <button type="button" className={styles.btn}>
          Log In /
        </button>
        <button type="button" className={styles.btn}>
          Sign Up
        </button>
      </Box>
      <Box className={styles.list}>
        <ListItem text="New collection" />
        <ListItem text="New arrivals" />
        <ListItemUpper text="women collection" />
        <ListItemUpper text="men collection" />
        <ListItemUpper text="accessory" />
      </Box>
      <Social />
=======
    const burgerDropdownContent = <>
        {!isAuthorized && <Box className={`${classes.auth} wrapper`}>
            <Box>
                <Link to="/member">
                    <p className={classes.btn}>Log In /</p>
                </Link>
            </Box>
            <Box style={{marginLeft: "5px"}}>
                <Link to="/member">
                    <p className={classes.btn}>Sign Up</p>
                </Link>
            </Box>
        </Box>}
        <Box className={classes.list}>
            {mainCategoryLinks}
        </Box>
        <Social/>
>>>>>>> origin/develop
    </>
  );

<<<<<<< HEAD
  return (
    <>
      <Box className={styles.container}>
        <div onClick={handleBurgerIconClick} className={styles.wrapper}>
          <span
            className={isDropdownActive ? styles.topLineClicked : styles.line}
          />
          <span
            className={
              isDropdownActive ? styles.middleLineClicked : styles.middleLine
            }
          />
          <span
            className={
              isDropdownActive ? styles.bottomLineClicked : styles.line
            }
          />
        </div>
      </Box>
      <Dropdown
        classNames={{
          closed: styles.dropdown,
          active: styles.dropdownActive
        }}
        isActive={isDropdownActive}
        lockBodyScrolling
        children={burgerDropdownContent}
      />
    </>
  );
=======

    return (
        <>
            <Box className={classes.container}>
                <div onClick={handleBurgerIconClick} className={classes.wrapper}>
                    <span className={isDropdownActive ? classes.topLineClicked : classes.line}/>
                    <span className={isDropdownActive ? classes.middleLineClicked : classes.middleLine}/>
                    <span className={isDropdownActive ? classes.bottomLineClicked : classes.line}/>
                </div>
            </Box>
            <Dropdown
                classNames={{
                    closed: classes.dropdown,
                    active: classes.dropdownActive,
                }}
                isActive={isDropdownActive}
                lockBodyScrolling
                children={burgerDropdownContent}
            />
        </>
    );
>>>>>>> origin/develop
}

export default Burger;
