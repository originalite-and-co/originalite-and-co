import React, {useEffect, useState} from 'react';
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
import {useRouteMatch} from "react-router-dom";
import {Close, ExpandMore} from "@material-ui/icons";

import classes from "./Filter.module.scss"
import {colorRequests, sizeRequests} from "../../../../api/server";
import useAsyncError from "../../../hooks/useAsyncError";

import _ from "lodash";

Filter.propTypes = {};

function Filter(props) {
    const match = useRouteMatch();
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const throwAsyncError = useAsyncError();

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


    const colorList = colors?.map((color) => {
        return (
            <Grid
                item
                component="li"
                xs={4}
            >
                <button className={classes.colorButton}>
                    <span className={classes.color} style={{backgroundColor: color.cssValue}}/>
                    <Typography noWrap className={classes.colorName} component="p">{_.lowerCase(color.name)}</Typography>
                </button>
            </Grid>
        );
    })

    return (
        <Box className={classes.root}>
            <Typography align="center" className={classes.heading} component="p" variant="body2">
                Filters
            </Typography>
            <IconButton className={classes.closeButton} aria-label="close">
                <Close/>
            </IconButton>
            <Divider className={classes.divider}/>
            <Box className={`${classes.content} wrapper`}>
                <Accordion className={classes.accordion}>
                    <AccordionSummary className={classes.accordionSummary}
                                      expandIcon={<ExpandMore/>}
                    >
                        <Typography className={classes.AccordionSummaryText} component="p" variant="body1">
                            Colors
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.AccordionDetails}>
                        <Grid spacing={7} container component="ul" >
                            {colorList}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary className={classes.accordionSummary}
                                      expandIcon={<ExpandMore/>}
                    >
                        <Typography className={classes.AccordionSummaryText} component="p" variant="body1">
                            Sizes
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.AccordionDetails}>
                        <Typography>
                            Some sizes
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary className={classes.accordionSummary}
                                      expandIcon={<ExpandMore/>}
                    >
                        <Typography className={classes.AccordionSummaryText} component="p" variant="body1">
                            Price
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.AccordionDetails}>
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