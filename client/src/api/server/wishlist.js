import {
  generateFetchException,
  generateHeaders
} from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const WISHLIST_PATH = '/api/wishlist';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a wishlist'),
  retrieve: generateFetchException('retrieving the wishlist'),
  update: generateFetchException('updating the wishlist'),
  delete: generateFetchException('deleting the wishlist'),
};

const wishlistRequests = new ServerApiRequests(WISHLIST_PATH, headers, exceptions);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const createWishlist = async (data) => {
  return await wishlistRequests.create(data);
};

/**
 *
 * @returns {Promise<Object>}
 */
const retrieveWishlist = async () => {
  return await wishlistRequests.retrieve();
};

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const updateWishlist = async (data) => {
  return await wishlistRequests.update(data);
};

/**
 *
 * @param {String} productId
 * @returns {Promise<Object>}
 */
const addProductToWishlist = async (productId) => {
  const exception = generateFetchException('adding a product to the wishlist');
  return await wishlistRequests.update(null, `${WISHLIST_PATH}/${productId}`, exception);
};

/**
 *
 * @param {String} productId
 * @returns {Promise<Object>}
 */
const deleteProductFromWishlist = async (productId) => {
  const exception = generateFetchException('deleting a product from the wishlist');
  return await wishlistRequests.delete(`${WISHLIST_PATH}/${productId}`, exception);
};

/**
 *
 * @returns {Promise<Object>}
 */
const deleteWishlist = async () => {
  return await wishlistRequests.delete();
};

const wishlist = {
  createWishlist,
  retrieveWishlist,
  updateWishlist,
  addProductToWishlist,
  deleteProductFromWishlist,
  deleteWishlist,
};

export default wishlist;