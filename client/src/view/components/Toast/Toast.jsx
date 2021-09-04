import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
Toast.propTypes = {
  message: PropTypes.string.isRequired,
  autoHideDuration: PropTypes.number,
  severity: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  anchorOrigin: PropTypes.exact({
    horizontal: PropTypes.oneOf(['center', 'left', 'right']),
    vertical: PropTypes.oneOf(['bottom', 'up'])
  })
};

Toast.defaultProps = {
  autoHideDuration: 6000,
  severity: 'info',
  variant: 'outlined'
};

/**
 *
 * @param {String} message - a message that will be displayed. Should start with a verb.
 * @param {Number} autoHideDuration - an amount of time that component should be displayed. 6000 is a default value
 * @param {String} severity - the severity of the alert. This defines the color and icon used.
 * @param {String} variant - the variant to use.
 * @param {Object} anchorOrigin - The anchor of the Snackbar
 * @param {String} className - className of the Snackbar component
 *
 * @returns {JSX.Element}
 * @constructor
 */

function Toast({
  message,
  autoHideDuration,
  severity,
  variant,
  anchorOrigin,
  className
}) {
  const [isOpen, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      className={className}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
    >
      <MuiAlert
        action={
          <CloseIcon
            data-testid="error-toast-close-icon"
            onClick={handleClose}
          />
        }
        onClose={handleClose}
        variant={variant}
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Toast;
