import { makeStyles } from '@material-ui/core/styles';

const styles = {
  stepper: {
    margin: '150px auto',
    fontFamily: 'Josefin Sans, sans-serif',
    padding: '20px',
    maxWidth: '540px',
    color: '#333',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5px 0',
    '& *': {
      margin: 15,
    },
  },
  progress: {
    color: '#ccc',
    fontSize: 24,
    fontWeight: 700,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 700,
    padding: '15px 0',
  },
  formInner: {
    padding: '25px 0',
  },
  prevButton: {
    transition: '.1s',
    fontSize: 20,
    padding: '14px 26px',
    fontFamily: 'inherit',
    color: '#000',
    border: '1px solid #000',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #fff',
    },
  },
  nextButton: {
    transition: '.1s',
    fontSize: 20,
    padding: '14px 26px',
    fontFamily: 'inherit',
    color: '#fff',
    border: '1px solid #000',
    backgroundColor: '#000',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
    },
  },
};

export default makeStyles(styles);