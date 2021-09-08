export function generateStyles() {
  return {
    dropdownWrapper: {
      position: 'absolute',
      top: '60px',
      left: '-15px',
      background: 'transparent'
    },
    content: {},
    dropdownItem: {
      left: '-15px',
      position: 'absolute',
      marginBottom: '5px',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderRadius: '50%',
      transform: 'translateY(0)',

      '&:first-child': {
        top: '60px',
        transition: 'transform 0.5s ease-in-out'
      },
      '&:nth-child(2)': {
        top: '120px',
        transition: 'transform 0.7s ease-in-out'
      },
      '&:nth-child(3)': {
        top: '180px',
        transition: 'transform 0.9s ease-in-out'
      }
    },
    dropdownItemClosed: {
      transform: 'translateY(-40vh)'
    },
    icon: {}
  };
}
