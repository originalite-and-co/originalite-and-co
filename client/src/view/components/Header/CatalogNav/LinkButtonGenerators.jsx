import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

export function CatalogNavLink({link, pathTo, styles, text}) {
    return (
        <Link
            ref={link}
            className={styles}
            to={pathTo}
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