import React from 'react';
import CatalogNavStyles from "./CatalogNav.module.css";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";

export function CatalogNavLink({pathTo, handleHover, styles, text,onMouseLeave}) {
    return (
        <Link onMouseEnter={handleHover}
              className={styles}
              to={pathTo}
              onMouseLeave={onMouseLeave}
        >
            {text}
        </Link>
    );
}

export function CatalogNavButton({onClickFunc, styles, text}) {
    return (
        <button type="button"
                className={styles}
                onClick={onClickFunc}
        >
            {text}
        </button>
    )
}