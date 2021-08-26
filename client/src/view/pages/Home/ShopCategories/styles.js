const generateStyles = ({ breakpoints }) => ({
  root: {},
  heading: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    marginBottom: '1rem'
  },
  categoryWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '30vw 33vw',
    gridGap: '6vw 3vw',
    gridTemplateAreas: `
"men women kids"
"outwear outwear outwear"
`,

    [breakpoints.up('desktop')]: {
      gridTemplateRows: '33vw 32vw'
    }
  }
});

export default generateStyles;
