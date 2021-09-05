import { makeStyles } from '@material-ui/core/styles';

const styles = ({ breakpoints }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between'
  },
  content: {
    paddingTop: '126px',
    paddingBottom: '4vh',

    [breakpoints.up('desktop')]: {
      paddingTop: '95px'
    }
  },
  paymentMethod: {
    padding: '20px 0'
  },
  paymentMethodTitle: {
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 700,
    margin: '0 0 20px 0',
    padding: '15px 0'
  },
  paymentMethodInner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '0 20px',
    '& > *:not(:last-child)': {
      margin: '0 0 20px 0'
    }
  },
  stepOne: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: 20
    },
    '& .firstName': {
      gridArea: '1 / 1 / 2 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '1 / 1 / 2 / 3'
      }
    },
    '& .lastName': {
      gridArea: '2 / 1 / 3 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '1 / 3 / 2 / 5'
      }
    },
    '& .email': {
      gridArea: '3 / 1 / 4 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '2 / 1 / 3 / 3'
      }
    },
    '& .phone': {
      gridArea: '4 / 1 / 5 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '2 / 3 / 3 / 5'
      }
    }
  },
  stepTwo: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: 20
    },
    '& .streetAdress': {
      gridArea: '1 / 1 / 2 / 4'
    },
    '& .zipCode': {
      gridArea: '2 / 1 / 3 / 2'
    },
    '& .city': {
      gridArea: '2 / 2 / 3 / 3'
    },
    '& .country': {
      gridArea: '2 / 3 / 3 / 4'
    }
  },
  stepThree: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: 20
    },
    '& .payment': {
      gridArea: '1 / 1 / 2 / 6',
      '& .form__field': {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: 20
      },
      '& .paypalNumber': {
        gridArea: '1 / 1 / 2 / 5',
        [breakpoints.up('desktop')]: {
          gridArea: '1 / 1 / 2 / 3'
        }
      },
      '& .paypalCVV': {
        gridArea: '2 / 1 / 3 / 5',
        [breakpoints.up('desktop')]: {
          gridArea: '2 / 1 / 3 / 2'
        }
      },
      '& .paypalDate': {
        gridArea: '3 / 1 / 4 / 5',
        [breakpoints.up('desktop')]: {
          gridArea: '2 / 2 / 3 / 3'
        }
      },
      '& .creditNumber': {
        gridArea: '1 / 1 / 2 / 5',
        [breakpoints.up('desktop')]: {
          gridArea: '1 / 1 / 2 / 3'
        }
      },
      '& .creditCVV': {
        gridArea: '2 / 1 / 3 / 5',
        [breakpoints.up('desktop')]: {
          gridArea: '2 / 1 / 3 / 2'
        }
      },
      '& .creditDate': {
        gridArea: '3 / 1 / 4 / 5',
        [breakpoints.up('desktop')]: {
          gridArea: '2 / 2 / 3 / 3'
        }
      },
      '& .cash': {
        gridArea: '1 / 1 / 2 / 5'
      },
      '& .form-radio__label': {
        border: '1px solid #ccc',
        padding: 15,
        borderRadius: 4,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        '& span': {
          fontSize: 18,
          fontWeight: 700
        }
      }
    }
  },
  productList: {
    '& .checkoutProductItem': {
      display: 'flex',
      margin: '10px 0'
    },
    '& .cardContent': {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between'
    },
    '& .cardImageWrapper': {
      width: 70,
      height: 70,
      margin: '0 15px 0 0'
    },
    '& .cardImage': {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    '& .cardHeader': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    '& .cardTitle': {
      fontSize: 18,
      fontWeight: 700,
      [breakpoints.up('desktop')]: {
        fontSize: 24
      }
    },
    '& .cardSubTitle': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: 150,
      fontSize: 14,
      fontWeight: 500,
      [breakpoints.up('desktop')]: {
        fontSize: 18
      }
    },
    '& .cardText': {
      display: 'flex',
      alignItems: 'center',
      color: '#ccc',
      fontSize: 16,
      fontWeight: 500,
      [breakpoints.up('desktop')]: {
        fontSize: 20
      }
    }
  },
  title: {
    padding: '0 0 20px 0',
    fontSize: 24,
    fontWeight: 700
  }
});

export default makeStyles(styles);
