import { makeStyles } from '@material-ui/core/styles';

const styles = ({ breakpoints, palette }) => ({
  responseWrapper: {
    padding: '60px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  responseTitle: {
    padding: '15px 0',
    fontSize: 22,
    fontWeight: 700
  },
  responseText: {
    padding: '15px 0',
    fontSize: '16'
  },
  button: {
    margin: '15px 0',
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333',
      color: '#f2f2f2'
    }
  },
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
      gridArea: '1 / 1 / 2 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '1 / 1 / 2 / 4'
      }
    },
    '& .zipCode': {
      gridArea: '2 / 1 / 3 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '2 / 1 / 3 / 2'
      }
    },
    '& .city': {
      gridArea: '3 / 1 / 4 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '2 / 2 / 3 / 3'
      }
    },
    '& .country': {
      gridArea: '4 / 1 / 5 / 5',
      [breakpoints.up('desktop')]: {
        gridArea: '2 / 3 / 3 / 4'
      }
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
  product: {
    paddingBottom: '6px',
    marginBottom: '10px',
    borderBottom: `1px solid ${palette.grey['500']}`
  },
  title: {
    padding: '0 0 20px 0',
    fontSize: 24,
    fontWeight: 700
  }
});

export default makeStyles(styles);
