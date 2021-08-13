import React, { Component } from "react";
import './StylesNew.scss';

import img from '../Page404/img/404imeges.jpeg';


import PropTypes from 'prop-types';

Page404.propTypes = {
};

function Page404(props) {
    return (
        <>
            <div className="ContainerPages404">
                <div className='link'>
                    <h1>Возможно вы имели ввиду:</h1>
                        <ul>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Accesory</li>
                        </ul>
                </div>
                <div className='info'>
                    <p>404</p>
                    <p>Потеряла Насяльника</p>
                    <b>Строаница не найдена</b>
                </div>
                    <img className="" src={img} />
            </div>
        </>
    );
}

export default Page404;