import { generateFetchException, generateHeaders } from './utils.js';

import ServerApiRequests from './ServerApiRequests';

const CART_PATH = '/api/cart';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a cart'),
  retrieve: generateFetchException('retrieving a cart'),
  update: generateFetchException('updating the cart'),
  delete: generateFetchException('deleting the cart')
};

const cartRequests = new ServerApiRequests(CART_PATH, headers, exceptions);

/**
 *
 * @param {Object} [data]
 * @returns {Promise<Object>}
 */

const createCart = async (data) => {
  return await cartRequests.create(
    data,
    undefined,
    undefined,
    generateHeaders()
  );
};

/**
 *
 * @returns {Promise<Object>}
 */

const retrieveCart = async () => {
  return await cartRequests.retrieve(undefined, undefined, generateHeaders());
};

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */

const updateCart = async (data) => {
  return await cartRequests.update(
    data,
    undefined,
    undefined,
    generateHeaders()
  );
};

/**
 *
 * @param {String} id
 * @param {String} size
 * @returns {Promise<Object>}
 */

const addProductToCart = async (id, size) => {
  const exception = generateFetchException('adding a product to the cart');
  return await cartRequests.update(
    {},
    `${CART_PATH}/${id}?size=${size}`,
    exception,
    generateHeaders()
  );
};

/**
 *
 * @param {String} id
 * @param {String} size
 * @returns {Promise<Object>}
 */

const decreaseProductQuantity = async (id, size) => {
  const exception = generateFetchException('decreasing a product quantity');
  return await cartRequests.delete(
    `${CART_PATH}/product/${id}?size=${size}`,
    exception,
    generateHeaders()
  );
};

/**
 * @param {String} id
 * @param {String} size
 * @returns {Promise<Object>}
 */

const deleteProductFromCart = async (id, size) => {
  const exception = generateFetchException('deleting a product from the cart');
  return await cartRequests.delete(
    `${CART_PATH}/${id}?size=${size}`,
    exception,
    generateHeaders()
  );
};

/**
 * @returns {Promise<Object>}
 */
const deleteCart = async () => {
  return await cartRequests.delete(undefined, undefined, generateHeaders());
};

const cart = {
  createCart,
  retrieveCart,
  updateCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  deleteCart
};

export default cart;
