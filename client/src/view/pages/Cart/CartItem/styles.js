const generateStyles = ({ breakpoints, palette }) => ({
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
    paddingBottom: '6vw'
  },
  picture: {
    marginRight: '3vw',

    '& img': {
      maxWidth: '100%'
    }
  },
  description: {},
  heading: {
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
    marginBottom: '.5rem'
  },
  counterWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  select: {
    color: '#847A7A'
  },
  option: {
    color: '#847A7A'
  },
  total: {
    marginTop: '.5rem',
    '& span': {
      fontWeight: 700
    }
  },
  divider: {
    backgroundColor: palette.primary.main
  }
});

export default generateStyles;
