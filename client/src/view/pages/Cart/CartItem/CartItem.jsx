import React from "react";
import { makeStyles } from "@material-ui/styles";
import generateStyles from "./styles";
import { Grid } from "@material-ui/core";

CartItem.propTypes = {};

function CartItem({}) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();

  return <Grid item component="li" className={classes.root} xs={12}></Grid>;
}

export default CartItem;
