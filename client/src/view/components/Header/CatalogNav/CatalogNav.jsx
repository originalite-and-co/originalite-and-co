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

    useEffect(useCallback(() => {
            if (!isAnyDropdownOpen) {
                setActiveDropdown(false)
            }

        }, [isAnyDropdownOpen, isDropdownActive]
    ), [isAnyDropdownOpen, isDropdownActive]);


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


    const handleMainCategoryLinkAction = (event, linkId) => {
        const isLinkTheSame = linkId === activeLinkId;

        if (isDropdownActive && !isLinkTheSame && activeLinkId !== null) {
            setTimeout(() => {
                setActiveDropdown(false);
            },0)
            setTimeout(() => {
                renderCategoryLinks(linkId);
            }, 0)
            setTimeout(() => {
                dispatch(isAnyDropdownOpenActions.closedDropdown())
            }, 0)
            setTimeout(() => {
                dispatch(isAnyDropdownOpenActions.openedDropdown())
            }, 0)
            setTimeout(() => {
                setActiveDropdown(true);
            }, 0)
            setActiveLinkId(linkId)
        }

        if (isDropdownActive) {
            dispatch(isAnyDropdownOpenActions.closedDropdown())
            setActiveDropdown(false)
            setActiveLinkId(linkId)
        } else {
            renderCategoryLinks(linkId)
            //close all dropdowns that are active
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

            setTimeout(() => {
                setActiveLinkId(linkId)
            })
        }
    }


    const renderCategoryLinks = (linkId) => {
        const categories = getAllChildCategories(catalog, linkId)
        setCategoryLinks(categories.map(category => {
            return (
                <li
                    key={category._id}
                    className={styles.categoryListItem}>
                    <NavLink
                        to={`/catalog/${generateCategoryPath(category)}`}
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

    const mainCategoryLinks = catalog
        .filter(category => category.parentId === "null")
        .map(category => {
            return (
                <Box key={category._id}>
                    {isDesktop
                        ?
                        <CatalogNavLink
                            pathTo={`/catalog/${category.id}`}
                            handleHover={(e) => handleMainCategoryLinkAction(e, category.id)}
                            styles={isDropdownActive ? `${styles.NavItemBtn} active` : styles.NavItemBtn}
                            text={category.name}/>
                        :
                        <CatalogNavButton
                            onClickFunc={(e) => handleMainCategoryLinkAction(e, category.id)}
                            styles={isDropdownActive ? `${styles.NavItemBtn} active` : styles.NavItemBtn}
                            text={category.name}/>
                    }
                </Box>
            )
        });

    let dropdownContent;
    if (categoryLinks.length) {
        dropdownContent = (
            <Box
                component="nav"
                className={`${styles.categoryNav} ${styles.wrapper}`}>
                <List className={styles.categoryList} data-testid="men-list">
                    {categoryLinks}
                </List>
            </Box>
        );
    }

    return (
        <Box className={`${styles.catalogNavWrapper} ${styles.wrapper}`} data-testid="catalog-nav">
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

function generateCategoryPath ({id, parentId}) {
    return id.replace(`${parentId}-`, `${parentId}/`);
}

export default CatalogNav;