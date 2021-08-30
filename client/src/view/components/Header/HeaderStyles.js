import './../../assets/styles/_variables.scss'

export function generateStyles({breakpoints}) {
    return {
        header: {
            background: "#000000",
            zIndex: "20",
            position: "fixed",
            right: "0",
            top: "0",
            width: "100%"
        },
        inner: {
            margin: "0 auto",
            minWidth: "320px",

            [breakpoints.up("desktop")]: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "23px"
            }
        }

    }
}