import React, {useCallback, useEffect, useState} from 'react';

import Box from '@material-ui/core/Box';
import Dropdown from "../../../Dropdown/Dropdown";
import {ListItemUpper} from "../BurgerListItem/ListItem";
import Social from "../Social/Social";

import styles from './Burger.module.scss';

import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../../redux/features/dropdown";
import {catalogRequests} from "../../../../../api/server";
import useAsyncError from "../../../../hooks/useAsyncError";
import {Link, NavLink} from "react-router-dom";
import {authorizationSelectors} from "../../../../../redux/features/authorization";

function Burger() {
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const [catalog, setCatalog] = useState([]);
    const dispatch = useDispatch();
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);
    const throwError = useAsyncError()
    const authorization = useSelector(authorizationSelectors.authorization)
    const [isAuthorized] = useState(authorization)

    useEffect(() => {
        if (!isAnyDropdownOpen) {
            setActiveDropdown(false);
        }
    }, [isAnyDropdownOpen, isDropdownActive]);

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
    }

    const burgerDropdownContent = <>
        {!isAuthorized && <Box className={`${styles.auth} wrapper`}>
            <Box>
                <Link to="/member">
                    <p className={styles.btn}>Log In /</p>
                </Link>
            </Box>
            <Box style={{marginLeft: "5px"}}>
                <Link to="/member">
                    <p className={styles.btn}>Sign Up</p>
                </Link>
            </Box>
        </Box>}
        <Box className={styles.list}>
            {mainCategoryLinks}
        </Box>
        <Social/>
    </>


    return (
        <>
            <Box className={styles.container}>
                <div onClick={handleBurgerIconClick} className={styles.wrapper}>
                    <span className={isDropdownActive ? styles.topLineClicked : styles.line}/>
                    <span className={isDropdownActive ? styles.middleLineClicked : styles.middleLine}/>
                    <span className={isDropdownActive ? styles.bottomLineClicked : styles.line}/>
                </div>
            </Box>
            <Dropdown
                classNames={{
                    closed: styles.dropdown,
                    active: styles.dropdownActive,
                }}
                isActive={isDropdownActive}
                lockBodyScrolling
                children={burgerDropdownContent}
            />
        </>
    );
}

export default Burger;
