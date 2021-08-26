import "./../../../../assets/styles/_variables.scss";
import "./../../../../assets/typography/typography.scss"

export function generateStyles({breakpoints}) {
    return {

        navItemsGroup: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            [breakpoints.up("desktop")]: {
                width: "335px",
                justifyContent: "space-between"
            },
        },
        navItem: {
            paddingRight: "30px",
            position: "relative",

            [breakpoints.up("desktop")]: {
                paddingRight: "0px"
            },
        },
        img: {
            cursor: "pointer"
        },
        imageWrapper: {
            [breakpoints.up("desktop")]: {
                paddingRight: "0",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "16px",
                lineHeight: "16px",
                color: "#E2DFDF",
                maxWidth: "125px"
            },
        },
        icon: {
            [breakpoints.up("desktop")]: {
                paddingRight: "5px"
            },
        }
    }
}