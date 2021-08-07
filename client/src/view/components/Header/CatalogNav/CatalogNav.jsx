import React, {useEffect, useState, useCallback} from 'react';

import {Link, NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import styles from './CatalogNav.module.scss';

import constants from '././.././.././../constants';
import useWindowSize from "../../../hooks/useWindowSize";
import useAsyncError from "../../../hooks/useAsyncError";
import {catalogRequests} from "../../../../api/server";

import {CatalogNavLink, CatalogNavButton} from './LinkButtonGenerators'
import Dropdown from "../Dropdowns/Dropdown";
import {List} from "@material-ui/core";
import CatalogNavDropdownStyles from "../Dropdowns/CatalogNavDropdown.module.scss";

function CatalogNav() {
    const [catalog, setCatalog] = useState([]);
    const [categoryLinks, setCategoryLinks] = useState([]);
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const [activeLinkId, setActiveLinkId] = useState(null)
    const [isDesktop, setIsDesktop] = useState();

    const sizes = useWindowSize()
    const throwError = useAsyncError();

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


        if(isDropdownActive && !isTheSameLink){
            setActiveDropdown(false)
            renderCategoryLinks(linkId);
            setActiveDropdown(true);
        }

        if (!isDropdownActive ){
            renderCategoryLinks(linkId)
        }
        setActiveDropdown(!isDropdownActive)
        setActiveLinkId(linkId)
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

    const dropdownContent = categoryLinks.length && <Box
        component="nav"
        className={`${styles.categoryNav} wrapper`}>
        <List className={styles.categoryList} data-testid="men-list">
            {categoryLinks}
        </List>
    </Box>;

    return (
        <Box className={`${styles.catalogNavWrapper} wrapper`} data-testid="catalog-nav">
            {mainCategoryLinks}
            <Dropdown isActive={isDropdownActive} onLeave={() => setActiveDropdown(false)} children={dropdownContent}/>
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
