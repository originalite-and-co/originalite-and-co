import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

SizeDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired
};

function SizeDialog({ isOpen, sizes, onClose }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleClose = () => {
    onClose(null);
  };

  const sizeList = sizes.map((size) => {
    return (
      <ListItem
        className={classes.listItem}
        key={size}
        button
        onClick={() => handleListItemClick(size)}
      >
        {size.toUpperCase()}
      </ListItem>
    );
  });

  return (
    <Dialog className={classes.root} open={isOpen} onClose={handleClose}>
      <DialogTitle className={classes.title}>Choose the size</DialogTitle>
      <List className={classes.list}>{sizeList}</List>
    </Dialog>
  );
}

export default SizeDialog;
