const generateStyles = ({ typography, palette, breakpoints }) => ({
  link: {
    extend: typography['body1'],
    fontFamily: typography.fontFamily,
    fontWeight: '300',
    color: palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&.active': {
      borderBottom: `1px solid ${palette.primary.main}`,
    },

    [breakpoints.up('desktop')]: {
      color: '#C4C4C4',

      '&:hover': {
        borderBottom: `1px solid ${palette.secondary.main}`,
      },

      '&.active': {
        color: palette.secondary.main,
        borderBottom: `1px solid ${palette.secondary.main}`,
      },
    },
  },
  separator: {
    color: '#C4C4C4',
  },
});

export default generateStyles;