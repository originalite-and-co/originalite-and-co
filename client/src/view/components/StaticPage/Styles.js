export function generateStyles({ breakpoints }) {
  return {
    wrapper: {
      position: 'relative',
      marginBottom: '15vh',

      [breakpoints.up('largeScreens')]: {
        marginBottom: '30vh'
      }
    },
    mapWrapper: {
      border: '1px solid black',
      marginTop: '5vh',
      marginLeft: '5vw',

      [breakpoints.up('tablet')]: {
        marginLeft: '5vw'
      }
    }
  };
}
