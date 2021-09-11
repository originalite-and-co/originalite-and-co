import actions from './actions';
import { wishlistRequests } from '../../../api/server';

const gotWishlist = () => async (dispatch, getState) => {
  const { authorization } = getState();
  if (authorization) {
    const response = await wishlistRequests.retrieveWishlist();
    if (!response) {
      return dispatch(actions.getWishlist([]));
    }
    return dispatch(actions.getWishlist(response.products));
  }
};

const addToWishlist = (id) => async (dispatch, getState) => {
  const { authorization } = getState();
  if (authorization) {
    await wishlistRequests.addProductToWishlist(id);
    return dispatch(actions.addToWishlist(id));
  }
};

const removeFromWishlist = (id) => async (dispatch, getState) => {
  const { authorization, wishlist } = getState();
  if (authorization) {
    await wishlistRequests.deleteProductFromWishlist(id);
    const updatedWishlist = wishlist.filter((object) => object._id !== id);
    return dispatch(actions.removeFromWishlist(updatedWishlist));
  }
};

const operations = {
  gotWishlist,
  addToWishlist,
  removeFromWishlist
};

export default operations;
