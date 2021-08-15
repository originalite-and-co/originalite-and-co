import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from "@material-ui/core";
import constants from "../../../constants";
import useWindowSize from "../../../hooks/useWindowSize";
import CatalogBreadcrumbs from "../Breadcrumbs/CatalogBreadcrumbs";
import {useHistory} from "react-router-dom";
import FilterIcon from "../../../assets/icons/Filter";

import classes from "./Products.module.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Filter from "../Filter/Filter";
import {useDispatch, useSelector} from "react-redux";
import {isAnyDropdownOpenActions, isAnyDropdownOpenSelectors} from "../../../../redux/features/dropdown";

Products.propTypes = {};

function Products({categoryTitle}) {

    const [isDesktop, setDesktop] = useState(false);
    const [isDropdownActive, setActiveDropdown] = useState(false)
    const {location} = useHistory();

    const {width} = useWindowSize();
    const dispatch = useDispatch();

    const isAnyDropdownOpen = useSelector(isAnyDropdownOpenSelectors.getIsAnyDropdownOpen);

    useEffect(() => {
        if (!isAnyDropdownOpen){
            setActiveDropdown(false)
        }
    }, [isAnyDropdownOpen])

    useEffect(() => {
        setDesktop(width >= constants.WINDOW_DESKTOP_SIZE)
    }, [width]);

    useEffect(useCallback(() =>{
        if (isDesktop){
            setActiveDropdown(false)
            dispatch(isAnyDropdownOpenActions.closedDropdown());
        }
    }, [isDesktop]), [isDesktop]);

    const handleButtonClick = (event) => {
        if (isDropdownActive) {
            setActiveDropdown(false);
            dispatch(isAnyDropdownOpenActions.closedDropdown());
            return;
        }

        setActiveDropdown(true)
        dispatch(isAnyDropdownOpenActions.openedDropdown());
    }

    return (
        <>
            {isDesktop && (
                <Typography
                    component="h2"
                    variant="h5"
                    className={classes.heading}
                >
                    {categoryTitle}
                </Typography>
            )}

            {
                !isDesktop && (
                    <>
                        <CatalogBreadcrumbs path={location.pathname}/>
                        <button onClick={handleButtonClick} className={classes.filterBtn}>
                            <FilterIcon viewBox="0 0 32 32" className={classes.filterIcon}/>
                            Filters
                        </button>
                    </>
                )
            }
            <Dropdown
                isActive={isDropdownActive}
                classNames={{
                    closed: classes.dropdown,
                    active: classes.dropdownActive,
                }}
                children={<Filter/>}
                lockBodyScrolling
            />
        </>
    );
}

export default Products;