import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
ErrorToast.propTypes = {
    message: PropTypes.string.isRequired,
    autoHideDuration: PropTypes.number
};

ErrorToast.defaultProps = {
    autoHideDuration: 6000
};

/**
 *
 * @param {String} message - a message that will be displayed.
 *  Should start with a verb.
 * @param {Number} autoHideDuration = 6000 - an amount of time that component should be displayed
 * @returns {JSX.Element}
 * @constructor
 */

function ErrorToast({message, autoHideDuration}) {
    const [isOpen, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false)
    }

    return (
        <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={autoHideDuration} >
            <MuiAlert action={<CloseIcon data-testid="error-toast-close-icon" onClick={handleClose}/>} onClose={handleClose} variant="outlined" severity="error">
                {message}
            </MuiAlert>
        </Snackbar>
    );
}

export default ErrorToast;