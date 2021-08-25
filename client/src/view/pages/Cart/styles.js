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
  summary: {
    backgroundColor: "#c4c4c433",
    padding: "7vw 10vw",

    [breakpoints.up("desktop")]: {
      padding: "2.7vw",
    },
  },
  summaryHeading: {
    fontWeight: 700,
    marginBottom: "1.5rem",
  },
  summaryContent: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",

    "&:fist-child": {
      flex: 3,
    },

    "&:last-child": {
      flex: 1,
    },
  },
  summaryTotal: {
    marginBottom: "2rem",
  },
  checkoutBtn: {
    width: "100%",
    paddingTop: "17px!important",
    paddingBottom: "15px!important",
    borderRadius: "unset",
  },
});

export default generateStyles;
