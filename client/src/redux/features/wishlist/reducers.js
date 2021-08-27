import types from './types';

const wishlistReducers = (state = [], action) => {
  const { type, payload } = action;
  const { GOT_WISHLIST, ADDED_TO_WISHLIST, REMOVED_FROM_WISHLIST } = types;

  switch (type) {
    case GOT_WISHLIST:
      return payload;
    case ADDED_TO_WISHLIST:
      return [...state, payload];
    case REMOVED_FROM_WISHLIST:
      return payload;
    default:
      return state;
  }
};

export default {
  wishlist: wishlistReducers
};
