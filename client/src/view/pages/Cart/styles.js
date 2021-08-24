const generateStyles = ({ palette }) => ({
  root: {
    paddingTop: "120px",
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
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noItemsAlert: {
    marginTop: "4vw",
    marginBottom: "4vw",
  },
  summaryContainer: {
    marginTop: "15vw",
  },
  summary: {
    backgroundColor: "#c4c4c433",
    padding: "7vw 10vw",
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
  },
});

export default generateStyles;
