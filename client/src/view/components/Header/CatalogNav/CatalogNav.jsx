import React, {useEffect, useState, useCallback} from 'react';

import {Link, NavLink} from 'react-router-dom';
import styles from './CatalogNav.module.scss';
import mainCategoryLinkStyles from "../MainCategoryLink/MainCategoryLink.module.scss"

import useWindowSize from "../../../hooks/useWindowSize";
import useAsyncError from "../../../hooks/useAsyncError";
import {useDispatch, useSelector} from "react-redux";
import {catalogRequests} from "../../../../api/server";
import constants from '././.././.././../constants';
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../redux/features/dropdown";

import Box from '@material-ui/core/Box';
import {Grid, List} from "@material-ui/core";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import MainCategoryLink from "../MainCategoryLink/MainCategoryLink";
import AllCategories from "../AllCategories/AllCategories";

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
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [isDesktop])

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

        // setActiveDropdown(!isDropdownActive)
        // setActiveLinkId(linkId)
    }


    const renderCategoryLinks = (linkId) => {
        const categories = getAllChildCategories(catalog, linkId)
        setCategoryLinks(categories.map(category => {
            return (
                <Grid
                    item
                    key={category._id}
                    className={styles.categoryListItem}
                    component="li"
                    xs={2}
                >
                    <NavLink
                        to={`/catalog/${generateCategoryPath(category)}`}
                        className={styles.categoryLink}
                        activeClassName={styles.categoryLinkActive}
                        onClick={handleCategoryLinkClick}
                    >
                        {category.name}
                    </NavLink>
                </Grid>
            );
        }));
    }


    const mainCategoryLinks = catalog
        .filter(category => category.parentId === "null")
        .map(category => {
            return <MainCategoryLink
                category={category}
                onHover={handleMainCategoryLinkAction}
                isDesktop={isDesktop}
                isDropdownActive={isDropdownActive}
                onClick={handleMainCategoryLinkAction}/>
        });

    let dropdownContent;
    if (categoryLinks.length) {
        dropdownContent = (
            <Box
                component="nav"
                className={`${styles.categoryNav} wrapper`}>
                {isDesktop && <p className={styles.categoriesTitle}>Categories</p>}
                <Grid
                    container
                    component="ul"
                    className={styles.categoryList}
                    data-testid="dropdown-content"
                    direction="column"
                    alignItems="flex-start"
                    wrap={isDesktop ? "wrap" : "nowrap"}
                    spacing={5}
                >
                    {categoryLinks}
                </Grid>
            </Box>
        );
    }

    const renderMainCategoryLinks = (numberOfLinks) => {
        if (mainCategoryLinks.length > numberOfLinks){
            const mainCategoryLinksCopy = [...mainCategoryLinks];
            mainCategoryLinksCopy.splice(numberOfLinks, Infinity, <AllCategories/>);
            return mainCategoryLinksCopy;
        }

        return mainCategoryLinks
    };

    return (
        <List
            disablePadding
            className={isDesktop
                ? styles.catalogNavWrapper
                : `${styles.catalogNavWrapper} wrapper`}
            data-testid="catalog-nav"
        >
            {renderMainCategoryLinks(3)}
            <HeaderDropdown
                classNames={{
                    closed: styles.dropdown,
                    active: styles.dropdownActive
                }}
                lockBodyScrolling
                isActive={isDropdownActive}
                onMouseLeave={() => {
                    if (isDesktop) {
                        dispatch(isAnyDropdownOpenActions.closedDropdown())
                        setActiveDropdown(false)
                    }
                }}
                children={dropdownContent}/>
        </List>
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

function generateCategoryPath({id, parentId}) {
    return id.replace(`${parentId}-`, `${parentId}/`);
}

export default CatalogNav;