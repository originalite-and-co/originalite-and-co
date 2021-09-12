import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';

import style from '../style';

const CheckoutResponse = ({ response = {} }) => {
  const styles = style();
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
            Successfully
          </Typography>
          <Typography className={styles.responseText}>
            Order successfully completed
          </Typography>
        </Box>
      )}
      <Button
        className={styles.button}
        variant="contained"
        onClick={handleClick}
      >
        Okey
      </Button>
    </Box>
  );
};

export default CheckoutResponse;
