import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';

CartItem.propTypes = {
  cartQuantity: PropTypes.number.isRequired,
  itemNo: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.string.isRequired,
  enabled: PropTypes.bool
};

function CartItem({
  cartQuantity,
  itemNo,
  color,
  maxQuantity,
  currentPrice,
  name,
  imageUrls,
  size,
  enabled
}) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(cartQuantity);
  }, []);

  useEffect(() => {}, [quantity]);

  let optionList = [];
  for (let i = 1; i <= maxQuantity; i++) {
    if (i > 10) {
      break;
    }

    optionList.push(
      <MenuItem className={classes.option} key={i} value={i}>
        {i}
      </MenuItem>
    );
  }

  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };

  return (
    <Grid item component="li" className={classes.root} xs={12}>
      <IconButton className={classes.closeBtn} color="primary">
        <Close />
      </IconButton>
      <Grid className={classes.inner} container>
        <Grid item xs={5} component="picture" className={classes.picture}>
          <img src={imageUrls[0]} alt={name} />
        </Grid>
        <Grid item xs={6} className={classes.description}>
          <Typography
            component="h3"
            variant="body1"
            color="textSecondary"
            className={classes.heading}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            variant="body2"
            color="inherit"
            className={classes.itemNumber}
          >
            {itemNo}
          </Typography>
          <Box className={classes.text}>
            <Typography variant="body2" color="inherit" component="span">
              Price:
            </Typography>
            <Typography variant="body2" color="inherit" component="span">
              {currentPrice} $
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="body2" color="inherit" component="span">
              Color:
            </Typography>
            <Typography variant="body2" color="inherit" component="span">
              {color}
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="body2" color="inherit" component="span">
              Size:
            </Typography>
            <Typography variant="body2" color="inherit" component="span">
              {size.toUpperCase()}
            </Typography>
          </Box>
          <Box className={`${classes.counterWrapper} ${classes.text}`}>
            <Typography variant="body2" color="inherit" component="span">
              Quantity:
            </Typography>
            <Select
              className={classes.select}
              value={quantity}
              onChange={handleChange}
            >
              {optionList}
            </Select>
          </Box>
          <Box className={`${classes.text} ${classes.total}`}>
            <Typography variant="body2" color="textSecondary" component="span">
              Total:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              {currentPrice} $
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider className={classes.divider} variant="fullWidth" />
    </Grid>
  );
}

export default CartItem;
