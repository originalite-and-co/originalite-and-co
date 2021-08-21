import React, { Component } from "react";
import Header from '../../components/Header/Header';
import styles from './Page.module.scss';
import Footer from "../../components/Footer/Footer";
import img from '../Page404/img/oops.jpg';



import PropTypes from 'prop-types';

Page404.propTypes = {
};

function Page404(props) {
    return (
        <>
            <div className={styles.ContainerPages404}>
                <Header />
                    <div className={styles.Info}>
                        <p className={styles.Info__404}>404</p>
                        <p className={styles.Info__item}>Page not found</p>
                    </div>
                <div className={styles.img}>
                    <img className={styles.img__item} src={img} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page404;