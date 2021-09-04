import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const ORDERS_PATH = '/api/orders';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating the order'),
  retrieve: generateFetchException('retrieving the order'),
  update: generateFetchException('updating the order'),
  delete: generateFetchException('deleting the order')
};

const orderRequests = new ServerApiRequests(ORDERS_PATH, headers, exceptions);

/**
 *
 * @param {Object} orderDetails - object with order details
 * @returns {Promise<Object|Array|string|{statusText: string, message: (*|string), status: number}>}
 */

const createOrder = async (orderDetails) => {
  return await orderRequests.create(orderDetails);
};

/**
 *
 * @returns {Promise<Array>} - customer orders
 */
const retrieveOrder = async () => {
  return await orderRequests.retrieve(
    `${ORDERS_PATH}`,
    undefined,
    generateHeaders()
  );
};

const orders = {
  createOrder,
  retrieveOrder
};

export default orders;
