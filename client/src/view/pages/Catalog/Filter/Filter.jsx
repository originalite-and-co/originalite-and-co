import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Typography} from "@material-ui/core";
import {useRouteMatch} from "react-router-dom";
import {Close, ExpandMore} from "@material-ui/icons";

import classes from "./Filter.module.scss"

Filter.propTypes = {

};

function Filter(props) {
    const match = useRouteMatch();
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);


    return (
        <Box className={classes.root}>
            <Typography align="center" className={classes.heading} component="p" variant="body2">
                Filters
            </Typography>
            <IconButton className={classes.closeButton} aria-label="close">
                <Close/>
            </IconButton>
            <Divider className={classes.divider} />
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
                        <Typography>
                            Some Colors
                        </Typography>
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