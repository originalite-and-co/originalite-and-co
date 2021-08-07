import React, {useEffect, useState, useCallback} from 'react';

import {Link, NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import styles from './CatalogNav.module.scss';

import useWindowSize from "../../../hooks/useWindowSize";
import useAsyncError from "../../../hooks/useAsyncError";
import {useDispatch, useSelector} from "react-redux";
import {catalogRequests} from "../../../../api/server";
import constants from '././.././.././../constants';

import {CatalogNavLink, CatalogNavButton} from './LinkButtonGenerators'
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import {List} from "@material-ui/core";
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../redux/features/dropdown";

function CatalogNav() {
    const [catalog, setCatalog] = useState([]);
    const [categoryLinks, setCategoryLinks] = useState([]);
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const [activeLinkId, setActiveLinkId] = useState(null)
    const [isDesktop, setIsDesktop] = useState();

    const sizes = useWindowSize()
    const throwError = useAsyncError();

    const dispatch = useDispatch();
    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

    console.log(isAnyDropdownOpen)
    useEffect(() => {
        if (!isAnyDropdownOpen) {
            setActiveDropdown(false)
        }

    }, [isAnyDropdownOpen, isDropdownActive]);


    useEffect(useCallback(() => {
        catalogRequests.getCatalog()
            .then(
                data => setCatalog(data),
                error => throwError(error)
            );
    }, [catalog]), []);

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE ? setIsDesktop(true) : setIsDesktop(false)
    }, [])

    const handleCategoryLinkClick = (event) => {
        document.body.classList.remove("lock-scroll");
        setActiveDropdown(false);
        dispatch(isAnyDropdownOpenActions.closedDropdown());
    }

    const renderCategoryLinks = (linkId) => {
        const categories = getAllChildCategories(catalog, linkId)
        setCategoryLinks(categories.map(category => {
            return (
                <li
                    key={category._id}
                    className={styles.categoryListItem}>
                    <NavLink
                        to={`/catalog/${category.id}`}
                        className={styles.categoryLink}
                        activeClassName={styles.categoryLinkActive}
                        onClick={handleCategoryLinkClick}
                    >
                        {category.name}
                    </NavLink>
                </li>
            );
        }));
    }

    const handleMainCategoryLinkHover = (event, linkId) => {
        setActiveDropdown(false);
        renderCategoryLinks(linkId)
        setActiveDropdown(true);
    }

    const handleMainCategoryLinkClick = (event, linkId) => {
        const isTheSameLink = linkId === activeLinkId;


        if (isDropdownActive && !isTheSameLink) {
            setActiveDropdown(false)
            renderCategoryLinks(linkId);
            setActiveDropdown(true);
        }

        if (isDropdownActive) {
            dispatch(isAnyDropdownOpenActions.closedDropdown())
            setActiveDropdown(false)
        } else {
            renderCategoryLinks(linkId)
            //close all dropdowns that are active
            dispatch(isAnyDropdownOpenActions.closedDropdown())
            dispatch(isAnyDropdownOpenActions.openedDropdown())
            setActiveDropdown(true)
        }

        // setActiveDropdown(!isDropdownActive)
        // setActiveLinkId(linkId)
    }

    const mainCategoryLinks = catalog
        .filter(category => category.parentId === "null")
        .map(category => {
            return (
                <Box key={category._id}>
                    {isDesktop
                        ?
                        <CatalogNavLink
                            pathTo={`/catalog/${category.id}`}
                            handleHover={(e) => handleMainCategoryLinkHover(e, category.id)}
                            styles={isDropdownActive ? `${styles.NavItemBtn} active` : styles.NavItemBtn}
                            text={category.name}/>
                        :
                        <CatalogNavButton
                            onClickFunc={(e) => handleMainCategoryLinkClick(e, category.id)}
                            styles={isDropdownActive ? `${styles.NavItemBtn} active` : styles.NavItemBtn}
                            text={category.name}/>
                    }
                </Box>
            )
        });

    const dropdownContent = categoryLinks.length && (
        <Box
            component="nav"
            className={`${styles.categoryNav} wrapper`}>
            <List className={styles.categoryList} data-testid="men-list">
                {categoryLinks}
            </List>
        </Box>
    );

    return (
        <Box className={`${styles.catalogNavWrapper} wrapper`} data-testid="catalog-nav">
            {mainCategoryLinks}
            <HeaderDropdown
                classNames={{
                    closed: styles.dropdown,
                    active: styles.dropdownActive
                }}
                lockBodyScrolling
                isActive={isDropdownActive}
                onLeave={() => {
                    setActiveDropdown(false)
                    dispatch(isAnyDropdownOpenActions.closedDropdown())
                }}
                children={dropdownContent}/>
        </Box>
    );
}

function getAllChildCategories(catalog, linkId) {
    const dependencies = [linkId];
    const result = []
    const catalogCopy = [...catalog]

    const findCategory = () => {

        catalogCopy.forEach((category, index) => {
            dependencies.forEach(dependency => {
                if (category.parentId.toLowerCase() === dependency.toLowerCase()) {
                    dependencies.push(category.id.toLowerCase());
                    result.push(category);
                    catalogCopy.splice(index, 1);
                    findCategory()
                }
            });
        })
    }
    findCategory();
    return result;
}

export default CatalogNav;
