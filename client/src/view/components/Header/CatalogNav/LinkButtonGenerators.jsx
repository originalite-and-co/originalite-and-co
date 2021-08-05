import React from 'react';
import CatalogNavStyles from "./CatalogNav.module.css";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";

export function CatalogNavLink({pathTo, onHoverFunc,styles,text}) {
    return (
        <Box onMouseEnter={onHoverFunc} className={styles}>
            <Link to={pathTo}>
                    {text}
            </Link>
        </Box>
    );
}

export function CatalogNavButton({onClickFunc,styles,text}){
    return (
            <button type="button"
                    className={styles}
                    onClick={onClickFunc}
            >
                {text}
            </button>
    )
}