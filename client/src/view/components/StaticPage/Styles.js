export function generateStyles({ breakpoints }) {
  return {
    wrapper: {
      position: 'relative',
      marginBottom: '15vh',
      marginTop: '5vh',

      [breakpoints.up('largeScreens')]: {
        marginBottom: '30vh'
      }
    },
    mapWrapper: {
      border: '1px solid black',
      width: '90vw',
      marginTop: '5vh',
      marginLeft: '5vw',

      [breakpoints.up('tablet')]: {
        width: '400px'
      }
    }
  };
}
