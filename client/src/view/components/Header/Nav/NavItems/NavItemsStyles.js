import './../../../../assets/styles/_variables.scss';
import './../../../../assets/typography/typography.scss';

export function generateStyles({ breakpoints, palette, typography }) {
  return {
    navItemsGroup: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',

      [breakpoints.up('desktop')]: {
        minWidth: '350px',
        justifyContent: 'space-between'
      }
    },
    navItem: {
      paddingRight: '30px',
      position: 'relative',

      '& a': {
        display: 'block'
      },

      [breakpoints.up('desktop')]: {
        paddingRight: '0px'
      }
    },
    link: {},
    img: {
      cursor: 'pointer'
    },
    imageWrapper: {
      position: 'relative',
      [breakpoints.up('desktop')]: {
        paddingRight: '0',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '16px',
        lineHeight: '16px',
        color: '#E2DFDF',

        '& p': {
          whiteSpace: 'nowrap'
        }
      }
    },
    icon: {
      [breakpoints.up('desktop')]: {
        marginRight: '5px'
      }
    },
    iconTitle: {
      display: 'inline-block'
    },
    cartIconWrapper: {
      position: 'relative'
    },
    cartQuantity: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '.7rem'
    }
  };
}
