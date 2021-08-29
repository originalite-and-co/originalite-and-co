import { makeStyles } from '@material-ui/core/styles';

const styles = {
  stepper: {
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
  formInner: {},
  prevButton: {
    fontFamily: 'inherit',
    color: '#000',
    border: '1px solid #000',
    backgroundColor: 'transparent',
    padding: '10px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #fff',
    },
  },
  nextButton: {
    fontFamily: 'inherit',
    color: '#fff',
    border: '1px solid #000',
    backgroundColor: '#000',
    padding: '10px 16px',
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
