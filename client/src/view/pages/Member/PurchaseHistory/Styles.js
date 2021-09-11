export function generateStyles({ breakpoints }) {
  return {
    cardInnerWrapper: {
      width: '85%',
      margin: '0 auto'
    },
    card: {
      padding: '0',
      position: 'relative',
      marginBottom: '10px',

      '&:before': {
        position: 'absolute',
        content: '""',
        width: '5px',
        height: '80%',
        backgroundColor: '#000000',
        borderRadius: '5px',
        top: '10%',
        bottom: '10%',
        left: '10px',

        [breakpoints.up('desktop')]: {
          height: '90%',
          top: '5%',
          bottom: '5%'
        }
      }
    },
    imgsWrapper: {
      marginLeft: '-5px',
      width: '120px',
      marginTop: '9px',
      display: 'flex',
      justifyContent: 'flex-start'
    },
    infoBlock: {
      margin: '0px 0px 7px 0px'
    },
    secondaryTheme: {
      fontFamily: 'Open Sans',
      fontSize: '12px',
      lineHeight: '14px',
      color: '#797878',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: '300',
        top: '-15px'
      }
    },
    purchaseItemImg: {
      width: '50px',
      marginLeft: '5px',
      borderRadius: '5px',
      [breakpoints.up('desktop')]: {
        // height: '174px',
        // width: 'auto'
      }
    },
    heading: {
      textTransform: 'capitalize',
      fontFamily: 'Open Sans',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#000000',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        paddingBottom: '9px'
      }
    },
    purchaseItemAddInfo: {
      padding: '3px 0px',
      textTransform: 'capitalize',
      fontFamily: 'Open Sans',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#000000',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: '300'
      }
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto'
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    expandedBlock: {
      display: 'flex',
      margin: '5px auto'
    },
    expandedInfo: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      marginLeft: '20px'
    },
    expandedPriceQuantity: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    test: {
      position: 'absolute',
      top: '0',
      right: '10px'
    }
  };
}
