export function generateStyles({ breakpoints }) {
  return {
    purchaseItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '5px',
      paddingBottom: '5px',
      borderBottom: '1px solid #847A7A',

      [breakpoints.up('desktop')]: {
        paddingBottom: '15px',
        paddingTop: '15px'
      }
    },
    itemInfoBlock: {
      marginLeft: '20px'
    },
    purchaseItemImg: {
      height: '97px',

      [breakpoints.up('desktop')]: {
        height: '174px'
      }
    },
    purchaseItemTitle: {
      textTransform: 'capitalize',
      fontFamily: 'Open Sans',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#000000',

      [breakpoints.up('desktop')]: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingBottom: '16px'
      }
    },
    purchaseItemAddInfo: {
      fontFamily: 'Open Sans',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#847A7A',

      [breakpoints.up('desktop')]: {
        fontSize: '16px',
        lineHeight: '22px',
        paddingBottom: '16px'
      }
    },
    imageAndInfo: {
      display: 'flex'
    },
    btnsWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    cartBtn: {
      fontFamily: 'Open Sans',
      fontSize: '14px',
      lineHeight: '12px',
      border: 'none',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '5px'
    },
    removeBtn: {
      fontFamily: 'Open Sans',
      fontSize: '14px',
      lineHeight: '12px',
      border: 'none',
      backgroundColor: 'white',
      color: '#847A7A',
      marginTop: '5px'
    }
  };
}
