export function generateStyles({ breakpoints }) {
  return {
    input: {
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#373737',

      [breakpoints.up('desktop')]: {
        color: '#373737'
      }
    },
    formGroup: {
      position: 'relative'
    },
    createIcon: {
      position: 'absolute',
      right: '0'
    },
    select: {
      marginTop: '10px'
    }
  };
}
