import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import style from './Preloader.module.scss';
import PropTypes from 'prop-types';

Preloader.propTypes = {
};

function Preloader(props) {
    return (
        <>
          <div className={style.ContainerPreloader}>
             <div class="lds-roller">
                <div></div>
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
