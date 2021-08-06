import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import {Link, NavLink} from 'react-router-dom';
import CatalogNavStyles from './CatalogNav.module.css';
import WomenDropdown from './Dropdowns/WomenDropdown';
import useWindowSize from "../../../hooks/useWindowSize";
import constants from '././.././.././../constants';
import {CatalogNavLink, CatalogNavButton} from './LinkButtonGenerators'
import {useDispatch, useSelector} from "react-redux";
import {modalOperations, modalSelectors} from "../../../../redux/features/modal";
import Dropdown from "./Dropdowns/Dropdown";
import useAsyncError from "../../../hooks/useAsyncError";
import {catalogRequests} from "../../../../api/server";
import {Drawer} from "@material-ui/core";

function CatalogNav() {
    const dispatch = useDispatch()
    const sizes = useWindowSize()
    const throwError = useAsyncError();

    const [isDesktop, setIsDesktop] = useState();
    const [catalog, setCatalog] = useState([]);
    const [categoryLinks, setCategoryLinks] = useState([]);
    const [isDropdownActive, setActiveDropdown] = useState(false);

    const activeModal = useSelector(modalSelectors.modal)

    useEffect(() => {
        sizes.width >= constants.WINDOW_DESKTOP_SIZE ? setIsDesktop(true) : setIsDesktop(false)
    }, []);

    useEffect(() => {
        catalogRequests.getCatalog()
            .then(
                data => setCatalog(data),
                error => throwError(error)
            )
    }, []);


    const womenModalIsActive = activeModal.some(stateId => stateId === 'women-modal')
    const menModalIsActive = activeModal.some(stateId => stateId === 'men-modal')

    const handleMainNavCatalogLinkAction = (event, linkId) => {
        const categories = getAllChildCategories(catalog, linkId)
        setCategoryLinks(categories.map(category => {
            return <NavLink to={`/catalog/${category.id}`}>{category.name}</NavLink>
        }));
        setActiveDropdown(true)
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
                            styles={womenModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}
                            text={category.name}/>
                        :
                        <CatalogNavButton
                            onClickFunc={(e) => handleMainNavCatalogLinkAction(e, category.id)}
                            styles={womenModalIsActive ? CatalogNavStyles.NavItemBtnActive : CatalogNavStyles.NavItemBtnInactive}
                            text={category.name}/>
                    }
                </Box>
            )
        })
    return (
        <Box className={CatalogNavStyles.catalogNavWrapper} data-testid="catalog-nav">
            {mainCatalogNavLinks}
            <Dropdown isActive={isDropdownActive} onLeave={() => setActiveDropdown(false)} children={categoryLinks}/>
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
