import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from "@material-ui/core";
import constants from "../../../constants";
import useWindowSize from "../../../hooks/useWindowSize";
import CatalogBreadcrumbs from "../Breadcrumbs/CatalogBreadcrumbs";
import {useHistory} from "react-router-dom";
import FilterIcon from "../../../assets/icons/Filter";

import classes from "./Products.module.scss";

Products.propTypes = {};

function Products({categoryTitle}) {

    const [isDesktop, setDesktop] = useState(false);
    const {location} = useHistory();

    const {width} = useWindowSize();

    useEffect(() => {
        setDesktop(width >= constants.WINDOW_DESKTOP_SIZE)
    }, [width]);

    const handleButtonClick=() => {

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
        </>
    );
}

export default Products;