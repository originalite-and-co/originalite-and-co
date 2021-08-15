import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import ProductPage from "../ProductPage/ProductPage";

Home.propTypes = {

};

function Home(props) {
  return (
    <>
        {/*<Header/>*/}
        {/*<div>Home</div>*/}
        <ProductPage/>
        {/*<Footer/>*/}
    </>
  );
}

export default Home;
