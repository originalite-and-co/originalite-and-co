import types from './types';

const { ADDED_TO_WISHLIST, REMOVED_FROM_WISHLIST, GOT_WISHLIST } = types;

const getWishlist = (data) => ({
  type: GOT_WISHLIST,
  payload: data
});

const addToWishlist = (id) => ({
  type: ADDED_TO_WISHLIST,
  payload: id
});

const removeFromWishlist = (updatedWishlist) => ({
  type: REMOVED_FROM_WISHLIST,
  payload: updatedWishlist
});

export default {
  getWishlist,
  addToWishlist,
  removeFromWishlist
};
