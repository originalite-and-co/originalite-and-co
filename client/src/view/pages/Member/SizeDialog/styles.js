const generateStyles = ({ typography, palette }) => ({
  root: {},
  title: {
    ...typography['h6'],
    color: palette.primary.main
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '.3rem'
  },
  listItem: {
    ...typography['body1'],
    display: 'block',
    textAlign: 'center',
    color: palette.primary.main
  }
});

export default generateStyles;
