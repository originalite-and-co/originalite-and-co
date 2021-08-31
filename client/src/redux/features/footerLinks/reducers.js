import footerLinksTypes from './types';

const reducer = (state = [], action) => {
  const { type, payload } = action;
  const { GOT_LINKS } = footerLinksTypes;

  switch (type) {
    case GOT_LINKS:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  footerLinks: reducer,
};

export default reducers;
