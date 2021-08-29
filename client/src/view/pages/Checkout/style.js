import { makeStyles } from '@material-ui/core/styles';

const styles = {
  stepOne: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: 20,
    },
    '& .firstName': {
      gridArea: '1 / 1 / 2 / 3',
    },
    '& .lastName': {
      gridArea: '1 / 3 / 2 / 5',
    },
    '& .email': {
      gridArea: '2 / 1 / 3 / 3',
    },
    '& .phone': {
      gridArea: '2 / 3 / 3 / 5',
    },
  },
  stepTwo: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: 20,
    },
    '& .streetAdress': {
      gridArea: '1 / 1 / 2 / 4',
    },
    '& .zipCode': {
      gridArea: '2 / 1 / 3 / 2',
    },
    '& .city': {
      gridArea: '2 / 2 / 3 / 3',
    },
    '& .country': {
      gridArea: '2 / 3 / 3 / 4',
    },
  },
  stepThree: {
    '& .form__inner': {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: 20,
    },
    '& .cardNumber': {
      gridArea: '1 / 1 / 2 / 3;',
    },
    '& .expityDate': {
      gridArea: '1 / 3 / 2 / 4',
    },
    '& .cvv': {
      gridArea: '1 / 4 / 2 / 5',
    },
  },
};

export default makeStyles(styles);
