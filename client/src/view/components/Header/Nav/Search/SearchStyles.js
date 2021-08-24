import './../../../../assets/styles/_variables.scss'

export function generateStyles({breakpoints}) {
    return {
        informationToast: {
            bottom: "10vh!important"
        },
        textFieldWrapper: {
            marginTop: "76px",
            marginBottom: "131px",
            position: "relative",
            [breakpoints.up('desktop')]: {
                marginTop: "7vh",
                marginBottom: "10vh"
            }
        },
        form: {
            [breakpoints.up("desktop")]: {
                display: "block",
                width: "43vw",
                margin: "0 auto"
            }
        },
        error: {
            marginTop: "1rem",
            color: "#ff0000"
        },
        input: {
            color: "#000000!important"
        },
        btnWrapper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        imageWrapper: {
            paddingRight: "30px",
            position: "relative",
            [breakpoints.up("desktop")]: {
                paddingRight: "0px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "16px",
                lineHeight: "16px",
                color: "#E2DFDF"
            }
        },
        dropdown: {
            top: "65px",
            right: "200vw",
            backgroundColor: "#FFFFFF",
            height: "100%",

            [breakpoints.up("desktop")]: {
                top: "94px",
                height: "40vh",

                "& *": {
                    zIndex: "inherit"

                }
            }
        },
        dropdownActive: {
            right: "0",

            "&:after": {
                content: '',
                position: "absolute",
                top: "0",
                right: "0",
                left: "0",
                height: "100vh",
                backgroundColor: "#fff",
                zIndex: "9",
                opacity: ".5!important"
            }
        },
        dropdownInner: {
            [breakpoints.up("desktop")]: {
                backgroundColor: "#ffffff",
                opacity: "1"
            }
        },
        icon: {
          [breakpoints.up("desktop")]: {
              marginRight: "5px"
          }
        },
        closeIcon: {
            position: "absolute",
            top: "24px",
            right: "0"
        }
    }
}