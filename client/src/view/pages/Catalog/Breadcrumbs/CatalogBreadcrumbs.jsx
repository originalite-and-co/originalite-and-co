import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumbs} from "@material-ui/core";
import {NavigateNext} from "@material-ui/icons";
import {Link} from "react-router-dom";

import _ from "lodash";

import classes from "./CatalogBreadcrumbs.module.scss"

CatalogBreadcrumbs.propTypes = {
    path: PropTypes.string.isRequired,
};

function CatalogBreadcrumbs({path}) {
    /**
     * This function generates links judging by the path name
     * @function filter() is here because split creates an empty string as the first element.
     * This is caused by the fact that the pathname starts with a /(slash)
     * @function map() creates <Link/> component;
     *
     * @description stringIndex variable looks for the index of the link in pathname.
     * This is required to avoid getting the same index in dividerIndex variable, as
     * indexOf method returns the index of the first matched character. So every time,
     * the searching will be started from another position.
     *
     * dividerIndex variable is required to be the end index of a slice method
     *
     */
    const links = path.split('/')
        .filter(link => link.length)
        .map((link, index, array) => {
        const stringIndex = path.indexOf(link)
        const dividerIndex = path.indexOf("/", stringIndex);
        const currentLinkPath = path.slice(0, dividerIndex);
        const isLastOne = array.length === index + 1;
        return (
            <Link
                className={ isLastOne ? `${classes.link} ${classes.active}` : classes.link}
                to={currentLinkPath}>
                {_.upperFirst(_.lowerCase(link))}
            </Link>
        )
    })

    return (
        <Breadcrumbs className={classes.breadcrumbs} separator={<NavigateNext className={classes.separator} fontSize="small"/>}>
            <Link className={classes.link} to="/">
                Home
            </Link>
            {links}
        </Breadcrumbs>
    );
}

export default CatalogBreadcrumbs;