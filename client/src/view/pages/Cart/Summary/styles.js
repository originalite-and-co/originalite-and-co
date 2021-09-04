const generateStyles = ({ breakpoints }) => ({
  summary: {
    backgroundColor: '#c4c4c433',
    padding: '7vw 10vw',

    [breakpoints.up('desktop')]: {
      padding: '2.7vw'
    }
  },
  summaryHeading: {
    fontWeight: 700,
    marginBottom: '1.5rem'
  },
  summaryContent: {
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',

    '&:fist-child': {
      flex: 3
    },

    '&:last-child': {
      flex: 1
    }
  },
  summaryTotal: {
    marginBottom: '2rem'
  },
  checkoutBtn: {
    width: '100%',
    paddingTop: '17px!important',
    paddingBottom: '15px!important',
    borderRadius: 'unset'
  }
});

export default generateStyles;
