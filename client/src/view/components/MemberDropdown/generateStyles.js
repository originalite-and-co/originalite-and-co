export function generateStyles({ breakpoints }) {
  return {
    dropdownItem: {
      left: '-15px',
      position: 'absolute',
      zIndex: '1111999',
      marginBottom: '5px',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background:
        '-webkit-linear-gradient(268.93deg, #f2f2f2 15.72%, rgba(13, 5, 186, 0) 91.59%)',
      borderRadius: '50%',
      transform: 'translateY(0)',

      [breakpoints.up('desktop')]: {
        backgroundColor: 'transparent'
      },

      '&:hover': {
        [breakpoints.up('desktop')]: {
          background:
            '-webkit-linear-gradient(268.93deg, #f2f2f2 15.72%, rgba(13, 5, 186, 0) 91.59%)'
        }
      },

      '&:first-child': {
        top: '60px',
        zIndex: '1111999',
        transition: 'transform 0.5s ease-in-out',

        [breakpoints.up('desktop')]: {
          top: '50px'
        }
      },
      '&:nth-child(2)': {
        top: '120px',
        transition: 'transform 0.7s ease-in-out',

        [breakpoints.up('desktop')]: {
          top: '115px'
        }
      },
      '&:nth-child(3)': {
        top: '180px',
        transition: 'transform 0.9s ease-in-out'
      }
    },
    dropdownItemClosed: {
      transform: 'translateY(-40vh)',

      [breakpoints.up('desktop')]: {
        transform: 'translateY(-60vh)'
      }
    },
    icon: {}
  };
}
