const generateStyles = ({ breakpoints, palette, typography }) => ({
  root: {
    position: 'relative',
    marginBottom: '3vw',
    paddingTop: '2vw'
  },
  closeBtn: {
    position: 'absolute',
    top: '0',
    right: '0'
  },
  inner: {
    paddingBottom: '6vw',

    [breakpoints.up('desktop')]: {
      paddingBottom: '2.8vw'
    }
  },
  picture: {
    display: 'block',
    marginRight: '3vw',
    '& a': {
      display: 'block'
    },

    '& img': {
      display: 'block',
      maxWidth: '100%'
    }
  },
  description: {
    [breakpoints.up('desktop')]: {
      maxWidth: '40%'
    }
  },
  heading: {
    maxWidth: '80%',
    fontWeight: 700,
    marginBottom: '.5rem'
  },
  itemNumber: {
    color: '#847A7A',
    marginBottom: '.5rem'
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#847A7A',
    marginBottom: '.5rem',

    '& span:last-child': {
      paddingRight: '10px'
    }
  },
  counterWrapper: {
    extend: 'text',
    alignItems: 'center',

    '& span:last-child': {
      padding: 0
    }
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: typography.body1.fontSize
  },
  counterBtn: {
    padding: '5px'
  },
  removeBtn: {},
  counterIcon: {},
  removeIcon: {},
  counterValue: {
    color: '#847A7A',
    minWidth: '4ch',
    maxWidth: '7ch',

    '& input': {
      textAlign: 'center',
      padding: '.1em'
    }
  },
  addBtn: {},
  addIcon: {},
  counterError: {
    marginTop: '5px',
    display: 'block'
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0
    // left: '50%',
    //
    // transform: 'translateX(-50%)'
  },
  counterInfo: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    color: palette.error.main
  },
  total: {
    '& span': {
      fontWeight: 700
    }
  },
  divider: {
    backgroundColor: palette.primary.main
  }
});

export default generateStyles;
