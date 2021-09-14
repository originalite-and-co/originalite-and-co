const generateStyles = ({ breakpoints, palette }) => ({
  content: {
    height: '100%',
    paddingTop: '68px',

    [breakpoints.up('minDesktop')]: {
      paddingTop: '94px!important'
    }
  },
  breadcrumbsContainer: {
    paddingTop: '1rem!important',
    paddingLeft: '7vw!important',
    paddingRight: '7vw!important',

    [breakpoints.up('desktop')]: {
      padding: '1vh 4vw',
      borderTop: `1px solid ${palette.primary.main}`,
      backgroundColor: palette.primary.main
    }
  },
  filter: {
    [breakpoints.up('desktop')]: {
      position: 'sticky',
      top: '94px',
      left: 0,
      maxHeight: '100vh',
      paddingBottom: '5vh',
      backgroundColor: palette.primary.main
    }
  },
  filterContentWrapper: {
    height: 'auto',
    maxHeight: '100%',
    overflow: 'hidden scroll'
  },
  filterContentInner: {
    padding: '1vh 4vw 10vh'
  },
  productListWrapper: {
    position: 'relative',
    padding: '0 7vw!important',

    [breakpoints.up('desktop')]: {
      padding: '5vw 7vw!important'
    }
  }
});

export default generateStyles;
