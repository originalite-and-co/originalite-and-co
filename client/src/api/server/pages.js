import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const PAGES_PATH = '/api/pages';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a page'),
  retrieve: generateFetchException('retrieving pages'),
  update: generateFetchException('updating the page'),
  delete: generateFetchException('deleting the page')
};

const pageRequests = new ServerApiRequests(PAGES_PATH, headers, exceptions);
/**
 *
 * @param {Object} data - {
 *       "customId": "test",
 *       "title": "Test",
 *       "htmlContent": "<h1>Test</h1>",
 *       url: "/test/test"
 * }
 * @returns {Promise<Object>}
 */
const createPage = async (data) => {
  return await pageRequests.create(data);
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */
const retrievePages = async () => {
  return await pageRequests.retrieve();
};

/**
 *
 * @param {String} customId
 * @returns {Promise<Object>}
 */
const retrievePage = async (customId) => {
  const exception = generateFetchException('retrieving a page');
  return await pageRequests.retrieve(`${PAGES_PATH}/${customId}`, exception);
};

/**
 *
 * @param {Object} data
 * @param {String} customId
 * @returns {Promise<Object>}
 */
const updatePage = async (data, customId) => {
  return await pageRequests.update(data, `${PAGES_PATH}/${customId}`);
};

/**
 *
 * @param {String} customId
 * @returns {Promise<Object>}
 */
const deletePage = async (customId) => {
  return await pageRequests.delete(`${PAGES_PATH}/${customId}`);
};

const pages = {
  createPage,
  retrievePages,
  retrievePage,
  updatePage,
  deletePage
};

export default pages;
