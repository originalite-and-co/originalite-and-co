import React from 'react';
import PropTypes from 'prop-types';
import styles from "../MainCategoryLink/MainCategoryLink.module.scss";
import {ListItem} from "@material-ui/core";
import {Link} from "react-router-dom";

AllCategories.propTypes = {};

function AllCategories() {
    return (
        <ListItem className={styles.navItem}>
            <Link to="/catalog" className={styles.navItemBtn}>All Categories</Link>
        </ListItem>
    );
}

export default AllCategories;