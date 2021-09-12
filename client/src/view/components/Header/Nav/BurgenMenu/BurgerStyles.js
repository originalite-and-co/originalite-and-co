export function generateStyles() {
  return {
    wrapper: {
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: '12.6px',
      position: 'relative',
      width: '14px'
    },
    container: {
      display: 'block'
    },
    line: {
      width: '14px',
      height: '1px',
      backgroundColor: '#C4C4C4'
    },
    topLineClicked: {
      transform: 'rotate(45deg)',
      width: '16px',
      height: '1px',
      backgroundColor: '#C4C4C4',
      top: '5px',
      position: 'absolute'
    },
    bottomLineClicked: {
      transform: 'rotate(-45deg)',
      width: '16px',
      height: '1px',
      top: '5px',
      backgroundColor: '#C4C4C4',
      position: 'absolute'
    },
    middleLineClicked: {
      display: 'none'
    },
    middleLine: {
      width: '8px',
      height: '1px',
      backgroundColor: '#C4C4C4'
    },
    dropdown: {
      left: '200vw',
      backgroundColor: '#000000',
      top: '67px',
      height: '100%',
      overflowY: 'auto'
    },
    dropdownActive: {
      left: '0'
    },
    text: {
      fontFamily: 'Open Sans, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '19px'
    },
    auth: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: '40px',
      position: 'relative',

      '&:after': {
        content: '',
        position: 'absolute',
        top: '39px',
        width: '270px',
        height: '1px',
        backgroundColor: '#FFFFFF'
      }
    },
    btn: {
      border: 'none',
      backgroundColor: 'none',
      color: '#FFFFFF',
      fontFamily: 'Open Sans, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '19px',
      cursor: 'pointer'
    },
    list: {
      marginTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  };
}
