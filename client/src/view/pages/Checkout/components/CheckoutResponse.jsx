import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';

import useStyles from '../style';

CheckoutResponse.propTypes = {
  response: PropTypes.object
};

function CheckoutResponse({ response = {} }) {
  const styles = useStyles();
  const history = useHistory();

  const handleClick = () => history.push('/');

  return (
    <Box className={styles.responseWrapper}>
      {response.message ? (
        <Box className={styles.response}>
          <Typography variant="h4" className={styles.responseTitle}>
            Error
          </Typography>
          <Typography className={styles.responseText}>
            {response.message}
          </Typography>
        </Box>
      ) : (
        <Box className={styles.response}>
          <Typography variant="h4" className={styles.responseTitle}>
            Success
          </Typography>
          <Typography className={styles.responseText}>
            Order has successfully been operated
          </Typography>
        </Box>
      )}
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleClick}
      >
        OK
      </Button>
    </Box>
  );
}

export default CheckoutResponse;
