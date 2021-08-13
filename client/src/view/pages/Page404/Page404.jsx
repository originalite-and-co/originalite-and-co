import React, { Component } from "react";
import stiles from './Page.module.scss';

import img from '../Page404/img/404imeges.jpeg';


import PropTypes from 'prop-types';

Page404.propTypes = {
};

function Page404(props) {
    return (
        <>
            <div className={stiles.ContainerPages404}>
                <div className={stiles.ContainerLeft}>
                    <div className={stiles.BackMenu}>
                        <h1>Возможно вы имели ввиду:</h1>
                            <ul>
                                <li className={stiles.BackMenu__item}>Women</li>
                                <li className={stiles.BackMenu__item}>Men</li>
                                <li className={stiles.BackMenu__item}>Accesory</li>
                            </ul>
                    </div>
                    <div className={stiles.Info}>
                        <p className={stiles.Info__404}>404</p>
                        <p className={stiles.Info__item}>Потеряла Насяльника</p>
                        <b className={stiles.Info__item}>Строаница не найдена</b>
                    </div>
                </div>
                <div className={stiles.img}>
                    <img className={stiles.img__item} src={img} />
                </div>
            </div>
        </>
    );
}

export default Page404;