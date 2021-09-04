const generateStyles = ({ breakpoints }) => ({
  content: {
    paddingTop: '69px',

    [breakpoints.up('desktop')]: {
      paddingTop: '94px'
    }
  },
  heading: {
    marginTop: '20px',
    marginBottom: '1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '13vw',
    gridRowGap: '7.4vw',

    [breakpoints.up('tablet')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridColumnGap: '5vw',
      gridRowGap: '2.4vw'
    },

    [breakpoints.up('desktop')]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridColumnGap: '2vw'
    }
  }
});

export default generateStyles;
