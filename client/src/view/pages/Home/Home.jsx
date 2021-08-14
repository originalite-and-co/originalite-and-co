import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Preloader from "../Preloader/Preloader";

Home.propTypes = {

};

function Home(props) {
  return (
    <>
      <Header />
      <Preloader />
        <div>Home</div>
      <Footer/>
    </>
  );
}

export default Home;
