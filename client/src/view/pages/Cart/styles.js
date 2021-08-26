const generateStyles = ({ palette, breakpoints }) => ({
  root: {
    paddingTop: "120px",

    [breakpoints.up("desktop")]: {
      paddingTop: "94px",
    },
  },
  inner: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  heading: {
    marginBottom: ".5rem",
    fontWeight: 700,
  },
  divider: {
    backgroundColor: palette.primary.main,

    [breakpoints.up("desktop")]: {
      display: "none",
    },
  },
  productList: {
    marginBottom: "10vw",
    paddingBottom: "4vw",
    paddingTop: "4vw",

    [breakpoints.up("desktop")]: {
      marginRight: "3.5vw",
      marginBottom: "12vw",
    },
  },
  loaderContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noItemsAlert: {},
  summaryContainer: {
    marginTop: "5vw",

    [breakpoints.up("desktop")]: {
      marginTop: 0,
    },
  },
});

export default generateStyles;
