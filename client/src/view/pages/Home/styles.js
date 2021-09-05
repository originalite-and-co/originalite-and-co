const generateStyles = ({ palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.primary.main
  },
  content: {
    paddingTop: '68px',
    paddingBottom: '4vh',

    [breakpoints.up('desktop')]: {
      paddingTop: '95px'
    }
  },
  sectionWrapper: {
    paddingTop: '4vh',
    paddingBottom: '1vh'
  }
});

export default generateStyles;
