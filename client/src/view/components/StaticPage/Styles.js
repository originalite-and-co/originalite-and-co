export function generateStyles({ breakpoints }) {
  return {
    wrapper: {
      marginTop: '50px',
      [breakpoints.up('desktop')]: {
        marginTop: '70px'
      }
    },
    mapWrapper: {
      position: 'absolute',
      left: '0'
    }
  };
}
