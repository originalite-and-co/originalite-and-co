const generateStyles = ({ palette, typography, breakpoints }) => ({
  root: {
    position: 'fixed',
    top: '68px',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: `${palette.primary.main}2b`,
    zIndex: 20,

    [breakpoints.up('desktop')]: {
      top: '94px'
    }
  },
  snackbar: {
    display: 'block',
    borderRadius: '7px',
    backgroundColor: palette.secondary.main,

    [breakpoints.up('desktop')]: {
      maxWidth: '30vw',
      left: 'unset'
    }
  },
  snackbarInner: {
    padding: '2vw 3vw',

    [breakpoints.up('desktop')]: {
      padding: '2vw 2vw'
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  closeIcon: {},
  snackbarTitleWrapper: {
    padding: '.3em 0',
    marginBottom: '1rem'
  },
  snackbarTitleIcon: {
    fontSize: typography['body2'].fontSize,
    display: 'inline-block',
    position: 'relative',
    marginRight: '.3rem',
    top: '1px',
    color: palette.success.main
  },
  snackbarTitle: {
    display: 'inline-block'
  },
  content: {},
  image: {
    '& img': {
      maxWidth: '100%',
      objectFit: 'cover'
    }
  },
  description: {},
  productName: {
    marginBottom: '.875rem'
  },
  productSize: {
    color: palette.grey['600'],
    marginBottom: '.5rem'
  },
  productPrice: {
    '& p': {
      display: 'inline-block'
    },

    '& p:first-child': {
      color: palette.grey['600'],
      marginRight: '3px'
    },

    '& p:last-child': {
      fontWeight: 500
    }
  },
  btn: {
    display: 'block',
    margin: '5px auto',
    backgroundColor: 'transparent',
    borderRadius: '20px',
    maxWidth: '160px',
    textAlign: 'center',

    [breakpoints.up('desktop')]: {
      margin: '1.5rem auto 0'
    }
  }
});

export default generateStyles;
