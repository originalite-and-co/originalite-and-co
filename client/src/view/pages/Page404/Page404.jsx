import React from 'react';
import './Page404.module.scss';
import img from '../Page404/img/404imeges.jpeg';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

Page404.propTypes = {
};

function Page404(props) {
    return (
        <>
            <div className="ContainerPages404">
                <h1>Возможно вы имели ввиду:</h1>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Accesory</li>
                </ul>
                <p>404</p>
                <p>Потеряла Насяльника</p>
                <b>Строаница не найдена</b>
                    <img className="" src={img} />
            </div>
        </>
    );
}

export default Page404;