import {
  generateFetchException,
  generateHeaders,
} from './index';
import ServerApiRequests from './ServerApiRequests';

const CART_PATH = '/api/cart';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException("creating a cart"),
  retrieve: generateFetchException("retrieving a cart"),
  update: generateFetchException("updating the cart"),
  delete: generateFetchException("deleting the cart"),
};

const cartRequests = new ServerApiRequests(CART_PATH, headers, exceptions);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */

const createCart = async (data) => {
  return await cartRequests.create(data)
};

/**
 *
 * @returns {Promise<Object>}
 */

const retrieveCart = async () => {
  return await cartRequests.retrieve();
};

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */

const updateCart = async (data) => {
  return await cartRequests.update(data);
};

/**
 *
 * @param {Object} data
 * @param {String} id
 * @returns {Promise<Object>}
 */

const addProductToCart = async (data, id) => {
  const exception = generateFetchException("adding a product to the cart")
  return await cartRequests.update(data, `${CART_PATH}/${id}`, exception);
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */

const decreaseProductQuantity = async (id) => {
  const exception = generateFetchException("decreasing a product quantity")
  return await cartRequests.delete(`${CART_PATH}/product/${id}`, exception);
};

/**
 * @param {String} id
 * @returns {Promise<Object>}
 */

const deleteProductFromCart = async (id) => {
  const exception = generateFetchException("deleting a product from the cart");
  return await cartRequests.delete(`${CART_PATH}/${id}`, exception);
};

/**
 * @returns {Promise<Object>}
 */
const deleteCart = async () => {
  return await cartRequests.delete();
};

const cart = {
  createCart,
  retrieveCart,
  updateCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  deleteCart,
};

export default cart;
