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

Catalog.propTypes = {};

function Catalog(props) {
    const dispatch = useDispatch();

    const query = useSelector(filterSelectors.getFiltersQuery);

    const [isDesktop, setDesktop] = useState(false);
    const {width} = useWindowSize();

    useEffect(() => {
        setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])


    useEffect(() => {
        productRequests.retrieveByQuery(query)
            .then(data => console.log(data));
    }, [query])

    useEffect(() => {
        dispatch(filterOperations.getFilters())
    }, [])

    return (
        <>
            <Header/>
            <Grid
                container
                component="main"
                className={classes.content}
            >
                {isDesktop && <Grid
                    xs={isDesktop ? 3 : 0}
                    item
                    component="aside"
                    className={classes.filter}
                >
                    <Box className={classes.filterInner}>
                        <Filter/>
                    </Box>
                </Grid>}
                <Grid
                    xs={isDesktop ? 9 : 12}
                    component="section"
                    item
                >
                    <Box className={classes.contentInner}>
                        <Typography component="h2" variant="h5">
                            Category
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Catalog;