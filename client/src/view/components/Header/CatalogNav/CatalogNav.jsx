import React, {useEffect, useState, useCallback} from 'react';
import Box from '@material-ui/core/Box';
import {Link, NavLink} from 'react-router-dom';
import CatalogNavStyles from './CatalogNav.module.css';
import useWindowSize from "../../../hooks/useWindowSize";
import constants from '././.././.././../constants';
import {CatalogNavLink, CatalogNavButton} from './LinkButtonGenerators'
import {useDispatch} from "react-redux";
import useAsyncError from "../../../hooks/useAsyncError";
import {catalogRequests} from "../../../../api/server";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import {modalOperations} from "../../../../redux/features/modal";

function CatalogNav() {
    const [catalog, setCatalog] = useState([]);
    const [categoryLinks, setCategoryLinks] = useState([]);
    const [isDropdownActive, setActiveDropdown] = useState(false);
    const [isDesktop, setIsDesktop] = useState();

    const dispatch = useDispatch()
    const sizes = useWindowSize()
    const throwError = useAsyncError();

    const toggleCategories = () => {
        dispatch(modalOperations.toggleModal("categories"))
    };

    useEffect(useCallback(()=> {
        catalogRequests.getCatalog()
            .then(
                data => setCatalog(data),
                error => throwError(error)
            );
    }, [catalog]), []);

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE ? setIsDesktop(true) : setIsDesktop(false)
    }, [])

    const handleMainNavCatalogLinkAction = (event, linkId) => {
        const categories = getAllChildCategories(catalog, linkId)
        setCategoryLinks(categories.map(category => {
            return <NavLink to={`/catalog/${category.id}`}>{category.name}</NavLink>
        }));
        setActiveDropdown(true)
        toggleCategories()
    }

    const mainCatalogNavLinks = catalog
        .filter(category => category.parentId === "null")
        .map(category => {
            return (
                <Box key={category._id}>
                    {isDesktop
                        ?
                        <CatalogNavLink
                            pathTo={`/catalog/${category.id}`}
                            handleHover={(e) => handleMainNavCatalogLinkAction(e, category.id)}
                            styles={isDropdownActive ? `${CatalogNavStyles.NavItemBtn} active` : CatalogNavStyles.NavItemBtn}
                            text={category.name}

                        />
                        :
                        <CatalogNavButton
                            onClickFunc={(e) => handleMainNavCatalogLinkAction(e, category.id)}
                            styles={isDropdownActive ? `${CatalogNavStyles.NavItemBtn} active` : CatalogNavStyles.NavItemBtn}
                            text={category.name}/>
                    }
                </Box>
            )
        })
    return (
        <Box className={CatalogNavStyles.catalogNavWrapper} data-testid="catalog-nav">
            {mainCatalogNavLinks}
            <HeaderDropdown children={categoryLinks} isActive={isDropdownActive} onLeave={() => setActiveDropdown(false)}/>
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
