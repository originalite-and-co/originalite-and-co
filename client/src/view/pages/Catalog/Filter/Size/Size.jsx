import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Grid} from "@material-ui/core";
import classes from "./Size.module.scss";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {filterActions, filterSelectors} from "../../../../../redux/features/filters";

Size.propTypes = {
    name: PropTypes.string.isRequired,
    isDesktop: PropTypes.bool.isRequired,
};

function Size({name, isDesktop}) {
    const [isChecked, setChecked] = useState(false);

    const dispatch = useDispatch();
    const sizes = useSelector((state) =>
        filterSelectors.getSelectedFilter(state, "sizes"));

    useEffect(() => {
        if (Array.isArray(sizes)) {
            setChecked(sizes.some(size => size === name));
            return;
        }

        setChecked(sizes === name);
    }, [sizes]);

    const handleButtonClick = (event) => {
        if (isChecked){
            setChecked(false);
            dispatch(filterActions.deleteFilterValue("sizes", name));
            return;
        }

        dispatch(filterActions.addFilter({sizes : [name]}));
        setChecked(true);
    };

    return (
        <Grid
            item
            component="li"
            xs={isDesktop ? 12: 3}
            className={classes.listItem}
        >
            <button
                onClick={handleButtonClick}
                className={isChecked ? `${classes.sizeButton} ${classes.active}` : classes.sizeButton}>
                {_.upperCase(name)}
            </button>
        </Grid>
    );
}

export default Size;