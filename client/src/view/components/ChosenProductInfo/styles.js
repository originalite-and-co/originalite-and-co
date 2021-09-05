const generateStyles = ({ palette }) => ({
  content: {},
  image: {
    '& img': {
      maxWidth: '100%',
      objectFit: 'cover'
    }
  },
  description: {},
  productName: {
    marginBottom: '.875rem'
  },
  productInfo: {
    color: palette.grey['600'],
    marginBottom: '.5rem'
  },
  productPrice: {
    '& p': {
      display: 'inline-block'
    },

    '& p:first-child': {
      color: palette.grey['600'],
      marginRight: '3px'
    },

    '& p:last-child': {
      fontWeight: 500
    }
  }
});

export default generateStyles;
