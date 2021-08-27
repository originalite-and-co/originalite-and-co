import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const LINKS_PATH = '/api/links';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a link'),
  retrieve: generateFetchException('retrieving links'),
  update: generateFetchException('updating the link'),
  delete: generateFetchException('deleting the link'),
};

const linkRequests = new ServerApiRequests(LINKS_PATH, headers, exceptions);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const createLinks = async (data) => {
  return await linkRequests.create(data);
};

/**
 * @returns {Promise<Array<Object>>}
 */
const retrieveLinks = async () => {
  return await linkRequests.retrieve();
};

/**
 *
 * @param {String} linkId
 * @returns {Promise<Object>}
 */
const retrieveLinkById = async (linkId) => {
  const exception = generateFetchException('retrieving the link by id');
  return await linkRequests.retrieve(`${LINKS_PATH}/${linkId}`, exception);
};

/**
 *
 * @param {Object} data
 * @param {String} linkId
 * @returns {Promise<Object>}
 */
const updateLink = async (data, linkId) => {
  return await linkRequests.update(data, `${LINKS_PATH}/${linkId}`);
};

/**
 *
 * @param {String} linkId
 * @returns {Promise<Object>}
 */
const deleteLink = async (linkId) => {
  return await linkRequests.delete(`${LINKS_PATH}/${linkId}`);
};

const links = {
  createLinks,
  retrieveLinks,
  retrieveLinkById,
  updateLink,
  deleteLink,
};

export default links;
