import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import OneProduct from '../../components/Product/OneProduct'

ProductPage.propTypes = {

};

function ProductPage() {
    return (
        <>
            <Header/>
            <OneProduct/>
        </>
    );
}

export default ProductPage;
