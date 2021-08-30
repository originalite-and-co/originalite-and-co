import "./../../../assets/styles/_variables.scss"

export function generateStyles({breakpoints}) {
    return {
        catalogNavWrapper: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "14px!important",
            paddingBottom: "11px!important",
            zIndex: "10"
        },

        dropdown: {
            height: "100vh",
            right: "200vw",
            backgroundColor: "#000000",
            top: "124px",

            [breakpoints.up("desktop")]: {
                top: "93px",
                right: "200vh",
                height: "64.25vh",
                opacity: "0"
            }
        },

        dropdownActive: {
            right: "0",

            [breakpoints.up("desktop")]: {
                right: "0",
                opacity: "1"
            }
        },

        categoryNav: {
            height: "70%",
            overflowY: "auto",

            [breakpoints.up('desktop')]: {
                overflowY: "unset"
            }
        },

        categoryList: {
            marginTop: "2vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingBottom: "40px",

            [breakpoints.up('desktop')]: {
                height: "100%",
                alignContent: "flex-start"
            }
        },

        categoryListItem: {
            [breakpoints.up("desktop")]: {
                marginRight: "17%!important"
            }
        },

        categoryLink: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#FFFFFF",
            "&:hover": {
                borderBottom: "1px solid #FFFFFF"
            }
        },

        categoryLinkActive: {
            borderBottom: "1px solid #FFFFFF"
        },

        categoriesTitle: {
            [breakpoints.up('desktop')]: {
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "27px",
                color: "#FFFFFF",
                marginBottom: "48px",
                marginTop: "6vh"
            }
        }
    }
}