import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
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
