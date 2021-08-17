import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Grid, Typography} from "@material-ui/core";
import classes from "./Catalog.module.scss"
import Filter from "./Filter/Filter";
import Header from "../../components/Header/Header";
import {filterOperations, filterSelectors} from "../../../redux/features/filters";
import {useDispatch, useSelector} from "react-redux";
import {productRequests} from "../../../api/server";
import useWindowSize from "../../hooks/useWindowSize";
import constants from "../../constants";
import {useHistory} from "react-router-dom";

import _ from "lodash"
import Products from "./Products/Products";
import CatalogBreadcrumbs from "./Breadcrumbs/CatalogBreadcrumbs";

Catalog.propTypes = {};

function Catalog(props) {
    const dispatch = useDispatch();

    const query = useSelector(filterSelectors.getFiltersQuery);

    const [isDesktop, setDesktop] = useState(false);
    const [products, setProducts] = useState([]);
    const {width} = useWindowSize();

    const {location, replace} = useHistory();
    const categoryName = location.pathname.split("/").pop()
    const categoryTitle = _.upperFirst(_.lowerCase(categoryName))

    useEffect(() => {
        setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])


    useEffect(() => {
        replace(`${location.pathname}?${query}`)
        productRequests.retrieveByQuery(query)
            .then(data => setProducts(data.products));
    }, [query])

    useEffect(() => {
        dispatch(filterOperations.getFilters(location))
    }, [location.pathname])

    return (
        <>
            <Header/>
            <Grid
                container
                component="main"
                className={classes.content}
            >
                {isDesktop && (
                    <>
                        <Grid
                            item
                            xs={12}
                            className={`${classes.breadcrumbsContainer} wrapper`}
                        >
                            <CatalogBreadcrumbs path={location.pathname}/>
                        </Grid>
                        <Grid
                            xs={isDesktop ? 3 : 0}
                            item
                            component="aside"
                            className={classes.filter}
                        >
                            <Box className={classes.filterInner}>
                                <Filter/>
                            </Box>
                        </Grid>
                    </>
                )}
                <Grid
                    xs={isDesktop ? 9 : 12}
                    component="section"
                    item
                >
                    <Box className={classes.contentInner}>
                        <Products products={products} categoryTitle={categoryTitle}/>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Catalog;