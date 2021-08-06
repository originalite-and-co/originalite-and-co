import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import {CardList} from "../components/CardList/CardList";


Home.propTypes = {

};

function Home(props) {
  return (
    <>
        <Header/>
        <div>Home</div>
    <CardList />
    </>
  );
}

export default Home;
