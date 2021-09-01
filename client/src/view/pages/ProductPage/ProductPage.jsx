import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';
import { makeStyles } from '@material-ui/styles';
import generateStyles from './styles';

ProductPage.propTypes = {};

function ProductPage() {
  const useStyles = makeStyles(generateStyles);
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Product />
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;
