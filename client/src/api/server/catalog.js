import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const CATALOG_PATH = '/api/catalog';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a category'),
  retrieve: generateFetchException('retrieving a catalog'),
  update: generateFetchException('updating a catalog'),
  delete: generateFetchException('deleting a catalog')
};

const catalogRequests = new ServerApiRequests(
  CATALOG_PATH,
  headers,
  exceptions
);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */

const createCategory = async (data) => {
  return await catalogRequests.create(data);
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */

const retrieveCatalog = async () => {
  return await catalogRequests.retrieve();
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */

const retrieveCategory = async (id) => {
  const exception = generateFetchException('retrieving a category');
  return await catalogRequests.retrieve(`${CATALOG_PATH}/${id}`, exception);
};

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */

const updateCatalog = async (data) => {
  return await catalogRequests.update(data);
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const deleteCategory = async (id) => {
  const exception = generateFetchException('deleting a category');
  return await catalogRequests.delete(`${CATALOG_PATH}/${id}`, exception);
};

const catalog = {
  createCategory,
  retrieveCatalog,
  retrieveCategory,
  updateCatalog,
  deleteCategory
};

export default catalog;
