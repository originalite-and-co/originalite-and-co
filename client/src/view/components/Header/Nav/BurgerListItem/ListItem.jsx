import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import getAllChildCategories from '../../../../utils/getAllChildCategories';
import { makeStyles } from '@material-ui/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core';
import generateCategoryPath from '../../../../utils/generateCategoryPath';
import { generateStyles } from './ListItemStyle';

export function ListItemUpper({ text, category, catalog }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const dropdown = getAllChildCategories(catalog, category.id);
  const renderDropdown = dropdown.map((childrenCategory, index) => (
    <li key={`${index}-${childrenCategory.name}`}>
      <NavLink to={`/catalog/${generateCategoryPath(childrenCategory)}`}>
        <Typography variant="body1" component="p" color="textPrimary">
          {childrenCategory.name}
        </Typography>
      </NavLink>
    </li>
  ));

  return (
    <Box>
      <Box>
        <Box className={classes.listItemBody}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              <Typography variant="body1" component="p" color="textPrimary">
                {text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <ul>{renderDropdown}</ul>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}

ListItemUpper.propTypes = {
  text: PropTypes.string.isRequired
};
