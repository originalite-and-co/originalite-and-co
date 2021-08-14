import React, {useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Grid,
    IconButton,
    Typography
} from "@material-ui/core";
import {useHistory, useRouteMatch} from "react-router-dom";
import {Close, ExpandMore} from "@material-ui/icons";

import classes from "./Filter.module.scss"
import {catalogRequests, colorRequests, productRequests, sizeRequests} from "../../../../api/server";
import useAsyncError from "../../../hooks/useAsyncError";

import _ from "lodash";
import Color from "./Color/Color";
import {filterOperations, filterSelectors} from "../../../../redux/features/filters";
import {useDispatch, useSelector} from "react-redux";
import Size from "./Size/Size";
import useWindowSize from "../../../hooks/useWindowSize";
import constants from "../../../constants";
import CatalogBreadcrumbs from "../Breadcrumbs/CatalogBreadcrumbs";
import CategoryNav from "./CategoryNav/CategoryNav";

Filter.propTypes = {};

function Filter(props) {

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [isDesktop, setDesktop] = useState(false);
    const [category, setCategory] = useState(null);

    const throwAsyncError = useAsyncError();
    const {width} = useWindowSize();
    const history = useHistory();
    const {params} = useRouteMatch();


    useEffect(() => {
        catalogRequests.retrieveCategory(params.category)
            .then(category => setCategory(category));
    }, []);

    useEffect(() => {
        setDesktop(width >= constants.WINDOW_DESKTOP_SIZE);
    }, [width])

    useEffect(() => {
        colorRequests.retrieveColors()
            .then(
                data => setColors(data),
                error => throwAsyncError(error)
            );
    }, []);

    useEffect(() => {
        sizeRequests.retrieveSizes()
            .then(
                data => setSizes(data),
                error => throwAsyncError(error)
            );
    }, []);

    const colorList = colors?.map(({_id, name, cssValue}) => {
        return (
            <Color key={_id} name={name} cssValue={cssValue} isDesktop={isDesktop}/>
        );
    });

    const sizeList = sizes?.map(({name, _id}) => {
        return (
            <Size key={_id} name={name} isDesktop={isDesktop}/>
        );
    });

    return (
        <Box className={classes.root}>
            {
                isDesktop && (
                    <>
                        <CatalogBreadcrumbs path={history.location.pathname}/>
                        <CategoryNav parentCategoryId={category?.id} parentCategoryName={category?.name}/>
                    </>
                )
            }
            {
                !isDesktop && (
                    <>
                        <Typography align="center" className={classes.heading} component="p" variant="body2">
                            Filters
                        </Typography>
                        <IconButton className={classes.closeButton} aria-label="close">
                            <Close/>
                        </IconButton>
                        <Divider className={classes.divider}/>
                    </>
                )
            }

            <Box className={`${classes.content} wrapper`}>
                <Accordion
                    defaultExpanded={isDesktop}
                    className={classes.accordion}>
                    <AccordionSummary
                        className={classes.accordionSummary}
                        expandIcon={<ExpandMore className={classes.accordionIcon}/>}
                    >
                        <Typography
                            className={classes.accordionSummaryText}
                            component="p"
                            variant={isDesktop ? "h6" : "body1"}
                        >
                            Colors
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Grid
                            spacing={isDesktop ? 5: 7}
                            container
                            component="ul"
                            direction={isDesktop ? "column" : "row"}
                            wrap={isDesktop? "nowrap" : "wrap"}
                        >
                            {colorList}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded={isDesktop}
                           className={classes.accordion}>
                    <AccordionSummary className={classes.accordionSummary}
                                      expandIcon={<ExpandMore className={classes.accordionIcon}/>}
                    >
                        <Typography
                            className={classes.accordionSummaryText}
                            component="p"
                            variant={isDesktop ? "h6" : "body1"}
                        >
                            Sizes
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Grid
                            container
                            component="ul"
                            spacing={isDesktop ? 4 : 5}
                            direction={isDesktop ? "column" : "row"}
                            wrap={isDesktop? "nowrap" : "wrap"}
                        >
                            {sizeList}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    defaultExpanded={isDesktop}
                    className={classes.accordion}>
                    <AccordionSummary className={classes.accordionSummary}
                                      expandIcon={<ExpandMore className={classes.accordionIcon}/>}
                    >
                        <Typography
                            className={classes.accordionSummaryText}
                            component="p"
                            variant={isDesktop ? "h6" : "body1"}
                        >
                            Price
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <Typography>
                            Some price
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}

export default Filter;