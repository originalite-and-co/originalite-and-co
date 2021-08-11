import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import CardList from "../../components/CardList/CardList.jsx";
import PopularProductsCarousel from "../../components/PopularProductsCarousel/PopularProductsCarousel.jsx";
import ShopCategories from "../../components/ShopCategories/ShopCategories";


Home.propTypes = {

};

function Home(props) {
  return (
    <>
        <Header/>
        <div>Home</div>
    <CardList />
        <PopularProductsCarousel/>
        <ShopCategories/>
    </>
  );
}

export default Home;
