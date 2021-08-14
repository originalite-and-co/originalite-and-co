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
                        <h1>Возможно вы имели ввиду:</h1>
                            <ul>
                                <li className={stiles.BackMenu__item}>
                               <Link to="/#"><p>Women:</p></Link>
                        </li>
                        <span>_______________</span>
                                <li className={stiles.BackMenu__item}>
                                    Men:
                        </li>
                        <span>_______________</span>
                                <li className={stiles.BackMenu__item}>
                                    Kids:
                        </li>
                        <span>_______________</span>
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