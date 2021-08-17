import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import CardList from "../../components/CardList/CardList.jsx";
import ShopCategories from "../../components/ShopCategories/ShopCategories";
import {Box} from "@material-ui/core";
import PopularProductsCarousel from "../../components/PopularProductsCarousel/PopularProductsCarousel";

import classes from "./Home.module.scss"
import { cartRequests, catalogRequests, customerRequests } from '../../../api/server';

Home.propTypes = {};

function Home(props) {
  catalogRequests.retrieveCatalog()
  // customerRequests.retrieveCustomer()
    return (
        <Box>
            <Header/>
            <Box className={`${classes.content} wrapper`} component={"main"}>
               <PopularProductsCarousel/>
                <ShopCategories/>
            </Box>
            <Footer/>
        </Box>
    );
}

export default Home;
