const generateStyles = ({ breakpoints }) => ({
  root: {},
  heading: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    marginBottom: "1rem",
  },
  categoryWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '15vh 18vh',
    gridGap: ' 2.7vh 3vw',
    gridTemplateAreas: `
"men women kids"
"outwear outwear outwear"
`,
    [breakpoints.up("tablet")]: {
      gridTemplateRows: '24vh 26vh',
    },

    [breakpoints.up("minDesktop")]: {
      gridTemplateRows: '30vh 32vh',
    },

    [breakpoints.up("desktop")]: {
      gridTemplateRows: '46vh 45vh',
    }

  },
});

export default generateStyles;
