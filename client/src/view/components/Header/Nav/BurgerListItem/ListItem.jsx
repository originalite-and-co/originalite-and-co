import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './ListItem.module.scss';

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
  text: PropTypes.string.isRequired,
};
ListItemUpper.propTypes = {
  text: PropTypes.string.isRequired,
};
