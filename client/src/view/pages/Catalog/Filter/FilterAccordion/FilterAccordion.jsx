import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classes from "../Filter.module.scss";
import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";

FilterAccordion.propTypes = {
    text: PropTypes.string.isRequired,
    isDesktop: PropTypes.bool.isRequired,
    detailsContent: PropTypes.element
};

function FilterAccordion({text, isDesktop, detailsContent}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(isDesktop);
    }, [isDesktop])


    return (
        <Accordion
            expanded={isOpen}
            onChange={() => setIsOpen(!isOpen)}
            className={classes.accordion}>
            <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={<ExpandMore className={classes.accordionIcon}/>}
            >
                <Typography
                    className={classes.accordionSummaryText}
                    component="p"
                    variant={isDesktop ? "h6" : "body1"}
                    color={isDesktop ? "textPrimary": "textSecondary"}
                >
                    {text}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                {detailsContent}
            </AccordionDetails>
        </Accordion>
    );
}

export default FilterAccordion;