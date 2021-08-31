const generateStyles = ({ mixins, palette, breakpoints }) => ({
  heading: {
    marginBottom: '1rem',
  },
  filterBtn: {
    ...mixins.resetButtonStyles(),
    display: 'flex',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '18px',
    lineHeight: '1',
    color: palette.text.secondary,
    marginTop: '2vh',
    padding: 0,
  },
  filterIcon: {
    position: 'relative',
    bottom: '4px',
    marginRight: '4px',
  },
  noItemsAlert: {
    marginTop: '10vh',
  },
  dropdown: {
    top: '68px',
    left: '-200vw',
    bottom: 0,
    zIndex: 22,
    backgroundColor: palette.secondary.main,
  },
  dropdownActive: {
    left: 0,
  },
  productListWrapper: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: '54vw',
    gridGap: ' 14vw 4vh',
    marginTop: '2vh',
    paddingBottom: '5vh',

    [breakpoints.up('desktop')]: {
      gridAutoRows: 'minmax(500px, 38vw)',
      gridGap: '7.5vw 7.2vw',
    },
  },
  loader: {
    position: 'absolute',
    bottom: '1vh',
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
  productsLoader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export default generateStyles;
