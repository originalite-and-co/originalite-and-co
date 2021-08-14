import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from './Page.module.scss';

import img from '../Page404/img/404imeges.jpeg';



import PropTypes from 'prop-types';

Page404.propTypes = {
};

function Page404(props) {
    return (
        <>
            <div className={styles.ContainerPages404}>
                    <div className={styles.BackMenu}>
                        <h1 className={styles.BackMenu__title}>Возможно вы имели ввиду:</h1>
                            <ul>
                                <li className={styles.BackMenu__item}>
                                    <Link to="/Women">Women:</Link>
                                </li>
                                    <span className={styles.strip}>
                                        <span className={styles.item}></span>
                                    </span>
                                <li className={styles.BackMenu__item}>
                                    <Link to="/Men">Men:</Link>
                                </li>
                                    <span className={styles.strip}>
                                        <span className={styles.item}></span>
                                    </span>
                                <li className={styles.BackMenu__item}>
                                    <Link to="/Kids">Kids:</Link>
                                </li>
                                    <span className={styles.strip}>
                                        <span className={styles.item}></span>
                                    </span>
                            </ul>
                    </div>
                    <div className={styles.Info}>
                        <p className={styles.Info__404}>404</p>
                        <p className={styles.Info__item}>Потеряла Насяльника</p>
                        <b className={styles.Info__item__a}>Строаница не найдена</b>
                    </div>
                <div className={styles.img}>
                    <img className={styles.img__item} src={img} />
                </div>
            </div>
        </>
    );
}

export default Page404;