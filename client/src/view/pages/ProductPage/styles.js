const generateStyles = ({ breakpoints }) => ({
  main: {
    paddingTop: '68px',

    [breakpoints.up('desktop')]: {
      paddingTop: '95px'
    }
  }
});

export default generateStyles;
