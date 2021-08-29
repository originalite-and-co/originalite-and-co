import { makeStyles } from '@material-ui/core/styles';

const styles = {
  formField: {
    display: 'flex',
    '& .form__input': {
      flex: 1,
      height: 15,
      fontFamily: 'inherit',
      backgroundColor: 'transparent',
      padding: '12px 8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      color: (props) => props.color,
    },
  },
  fieldTitle: {
    padding: '5px 0',
  },
  error: {
    padding: '8px 0',
    fontSize: '12px',
    color: '#dc3545',
  },
};

export default makeStyles(styles);
