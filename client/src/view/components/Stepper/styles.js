import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  stepper: {
    padding: '20px',
    maxWidth: '540px',
    color: '#333',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& input': {
      color: '#000',
    },
  },
  prevButton: {
    color: '#000',
    border: '1px solid #000',
    padding: '6px 12px',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #fff',
    },
  },
  nextButton: {
    color: '#fff',
    border: '1px solid #000',
    backgroundColor: '#000',
    padding: '6px 12px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #000',
    },
  },
});

export default makeStyles((theme) => styles(theme));
