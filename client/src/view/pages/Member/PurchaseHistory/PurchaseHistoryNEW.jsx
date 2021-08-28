import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { generateStyles } from './Styles';
import { Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import PurchaseItem from './PurchaseItem';

PurchaseHistoryNew.propTypes = {
  orders: PropTypes.array.isRequired
};

function PurchaseHistoryNew({ orders }) {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let productsList;
  const areThereAnyProducts =
    orders !== null && orders !== undefined && orders.length >= 1;

  areThereAnyProducts
    ? (productsList = orders.map((order) => {
        return <PurchaseItem order={order} />;
      }))
    : (productsList = (
        <Typography
          style={{ textAlign: 'center' }}
          variant="body1"
          component="h2"
          color="textSecondary"
        >
          Your purchase history is empty
        </Typography>
      ));

  return <Box data-testid="purchase-history-list">{productsList}</Box>;
}

export default PurchaseHistoryNew;
