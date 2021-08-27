import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const PRODUCTS_PATH = '/api/products';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a product'),
  retrieve: generateFetchException('retrieving products'),
  update: generateFetchException('updating the product'),
  delete: generateFetchException('deleting the product'),
};

const productRequests = new ServerApiRequests(
  PRODUCTS_PATH,
  headers,
  exceptions,
);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const createProduct = async (data) => {
  return await productRequests.create(data);
};

/**
 *
 * @param {String} query
 * @returns {Promise<Array<Object>>}
 */
const searchForProduct = async (query) => {
  const exception = generateFetchException('searching for a product');
  return await productRequests.create(
    { query },
    `${PRODUCTS_PATH}/search`,
    exception,
  );
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */
const retrieveProducts = async () => {
  return await productRequests.retrieve();
};

/**
 *This function returns one product that has the same itemNo prop as it was passed
 * @param {String} itemNumber
 * @returns {Promise<Object>}
 */
const retrieveProductByItemNumber = async (itemNumber) => {
  const exception = generateFetchException(
    'retrieving the product by item number',
  );
  return await productRequests.retrieve(
    `${PRODUCTS_PATH}/${itemNumber}`,
    exception,
  );
};

/**
 *
 * @param {String} query - query in form "property=value&property2=value"
 * @returns {Promise<Array<Object>>}
 */

const retrieveByQuery = async (query) => {
  const exception = generateFetchException('retrieving products by query');
  return await productRequests.retrieve(
    `${PRODUCTS_PATH}/filter?${query}`,
    exception,
  );
};

/**
 * This function updates product and returns new version of it
 *
 * @param {String} id - product id
 * @param {Object} data - data that needs to be updated
 * @returns {Promise<Object>}
 */
const updateProduct = async (id, data) => {
  return await productRequests.update(data, `${PRODUCTS_PATH}/${id}`);
};

const product = {
  createProduct,
  searchForProduct,
  retrieveProducts,
  retrieveProductByItemNumber,
  retrieveByQuery,
  updateProduct,
};

export default product;
