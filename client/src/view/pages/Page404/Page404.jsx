import React, { Component } from "react";
import { Link } from 'react-router-dom';
import stiles from './Page.module.scss';

import img from '../Page404/img/404imeges.jpeg';



import PropTypes from 'prop-types';

Page404.propTypes = {
};

function Page404(props) {
    return (
        <>
            <div className={stiles.ContainerPages404}>
                    <div className={stiles.BackMenu}>
                        <h1 className={stiles.BackMenu__title}>Возможно вы имели ввиду:</h1>
                            <ul>
                                <li className={stiles.BackMenu__item}>
                                    <Link to="/Women">Women:</Link>
                                </li>
                                    <span className={stiles.strip}>
                                        <span className={stiles.item}></span>
                                    </span>
                                <li className={stiles.BackMenu__item}>
                                    <Link to="/Men">Men:</Link>
                                </li>
                                    <span className={stiles.strip}>
                                        <span className={stiles.item}></span>
                                    </span>
                                <li className={stiles.BackMenu__item}>
                                    <Link to="/Kids">Kids:</Link>
                                </li>
                                    <span className={stiles.strip}>
                                        <span className={stiles.item}></span>
                                    </span>
                            </ul>
                    </div>
                    <div className={stiles.Info}>
                        <p className={stiles.Info__404}>404</p>
                        <p className={stiles.Info__item}>Потеряла Насяльника</p>
                        <b className={stiles.Info__item__a}>Строаница не найдена</b>
                    </div>
                <div className={stiles.img}>
                    <img className={stiles.img__item} src={img} />
                </div>
            </div>
        </>
    );
}

export default Page404;