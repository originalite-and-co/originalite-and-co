import { withStyles } from '@material-ui/core/styles';

const PriceFilter = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  valueLabel: {
    left: -13,
    top: -35,
    '& *': {
      background: '#fff',
      color: '#000',
      fontWeight: 'bold',
    },
  },
  thumb: {
    height: 24,
    width: 6,
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: -10,
    marginLeft: -2,
  },
  track: {
    backgroundColor: '#fff',
    height: 4,
    borderRadius: 4,
  },
  rail: {
    backgroundColor: '#333',
    height: 2,
    borderRadius: 4,
  },
});

export default PriceFilter;
