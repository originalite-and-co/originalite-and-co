import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import CardList from "../../components/CardList/CardList.jsx";
import PopularProductsCarousel from "../../components/PopularProductsCarousel/PopularProductsCarousel.jsx";
import ShopCategories from "../../components/ShopCategories/ShopCategories";
import {Box} from "@material-ui/core";


Home.propTypes = {

};

function Home(props) {
  return (
    <>
        <Header/>
        <div>Home</div>
        <Footer/>
        <Box style={{backgroundColor: "black"}} className={"wrapper"} component={"main"} >
            <div>Home</div>
            <CardList />
            <PopularProductsCarousel/>
            <ShopCategories/>
        </Box>

    </>
  );
}

export default Home;
