export function generateStyles({ breakpoints }) {
  return {
    mapWrapper: {
      position: 'absolute',
      top: '53vh',
      left: '0vw',

      [breakpoints.up('tablet')]: {
        top: '35vh',
        left: '5vw'
      }
    }
  };
}
