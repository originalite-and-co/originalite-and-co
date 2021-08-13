import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Style from './Preloader.module.scss';
import PropTypes from 'prop-types';

Preloader.propTypes = {
};

function Preloader(props) {
    return (
        <>
          <div className={Style.ContainerPreloader}>
             <div class="lds-roller">
                <div>rjrjrrjrjr</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
         </div>
        </>
    );
}

export default Preloader;
