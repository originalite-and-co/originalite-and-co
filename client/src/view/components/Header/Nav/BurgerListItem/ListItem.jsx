import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import {NavLink} from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import getAllChildCategories from "../../../../utils/getAllChildCategories";
import {makeStyles} from "@material-ui/styles";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import generateCategoryPath from "../../../../utils/generateCategoryPath";
import {generateStyles} from './ListItemStyle'

<<<<<<< HEAD
export function ListItem({ text }) {
  return (
    <Box className={styles.listItem}>
      <Link to="/">
        <Box className={styles.listItemBody}>
          <ExpandMoreIcon fontSize="small" />
          <li className={styles.listItemText}>{text}</li>
        </Box>
      </Link>
    </Box>
  );
}

export function ListItemUpper({ text }) {
  return (
    <Box className={styles.listItem}>
      <Box>
        <Link to="/">
          <Box className={styles.listItemBody}>
            <ExpandMoreIcon fontSize="small" />
            <li className={styles.listItemTextUpper}>{text}</li>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
ListItemUpper.propTypes = {
  text: PropTypes.string.isRequired
=======
export function ListItemUpper({text, category, catalog}) {
    const useStyles = makeStyles(generateStyles);
    const classes = useStyles();

    const dropdown = getAllChildCategories(catalog, category.id)
    const renderDropdown = dropdown.map(childrenCategory => (
        <li>
            <NavLink
                to={`/catalog/${generateCategoryPath(childrenCategory)}`}
            >
                <Typography variant='body1' component="p" color="textPrimary">
                    {childrenCategory.name}
                </Typography>
            </NavLink>
        </li>
    ))

    return (
        <Box>
            <Box>
                <Box className={classes.listItemBody}>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon color="secondary"/>}
                        >
                            <Typography variant='body1' component="p" color="textPrimary">
                                {text}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <ul>
                                {renderDropdown}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
}

ListItemUpper.propTypes = {
    text: PropTypes.string.isRequired,
>>>>>>> origin/develop
};
