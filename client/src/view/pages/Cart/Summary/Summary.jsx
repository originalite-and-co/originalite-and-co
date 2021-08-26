import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import generateStyles from "./styles";

Summary.propTypes = {};

function Summary(props) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  return (
    <Box className={classes.summary}>
      <Typography
        className={classes.summaryHeading}
        component="h3"
        variant="body1"
        color="textSecondary"
      >
        Summary
      </Typography>
      <Box>
        <Box className={classes.summaryContent}>
          <Typography component="p" variant="body1" color="textSecondary">
            Order value:
          </Typography>
          <Typography component="p" variant="body1" color="textSecondary">
            100$
          </Typography>
        </Box>
        <Box className={classes.summaryContent}>
          <Typography component="p" variant="body1" color="textSecondary">
            Delivery:
          </Typography>
          <Typography component="p" variant="body1" color="textSecondary">
            FREE
          </Typography>
        </Box>
        <Box className={`${classes.summaryContent} ${classes.summaryTotal}`}>
          <Typography component="p" variant="body1" color="textSecondary">
            Total:
          </Typography>
          <Typography component="p" variant="body1" color="textSecondary">
            200$
          </Typography>
        </Box>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.checkoutBtn}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default Summary;
