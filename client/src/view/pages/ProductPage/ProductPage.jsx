import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import Product from '../../components/Product/Product'

ProductPage.propTypes = {

};

function ProductPage() {
    return (
        <>
            <Header/>
            <Product/>
        </>
    );
}

export default ProductPage;
