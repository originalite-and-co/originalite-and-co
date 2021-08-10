import React from 'react';
import PropTypes from 'prop-types';
import Header from "../../components/Header/Header";
import TextField from "@material-ui/core/TextField";
import Styles from "../Authentication/AuthenticationContent/Authentication.module.scss";

Home.propTypes = {

};

function Home(props) {
  return (
    <>
        <Header/>
        <div>Home</div>
    </>
  );
}

export default Home;
