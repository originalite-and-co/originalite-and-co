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
  description: {},
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
    marginBottom: '.5rem'
  },
  counterWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  counter: {
    display: 'flex',
    alignItems: 'center'
  },
  counterBtn: {
    padding: '5px'
  },
  removeBtn: {},
  counterIcon: {},
  removeIcon: {},
  counterValue: {
    color: '#847A7A',
    minWidth: '3ch',
    maxWidth: '5ch',

    '& input': {
      textAlign: 'center',
      padding: ''
    }
  },
  addBtn: {},
  addIcon: {},
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
