const generateStyles = (theme) => ({
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
  },
});

export default generateStyles;
