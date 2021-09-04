import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const SLIDES_PATH = '/api/slides';

const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a slide'),
  retrieve: generateFetchException('retrieving slides'),
  update: generateFetchException('updating the slide'),
  delete: generateFetchException('deleting the slide')
};

const slideRequest = new ServerApiRequests(SLIDES_PATH, headers, exceptions);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */

const addSlide = async (data) => {
  return await slideRequest.create(data);
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */
const retrieveSlides = async () => {
  return await slideRequest.retrieve();
};

/**
 *
 * @param {Object} data
 * @param {String} id
 * @returns {Promise<Object>}
 */
const updateSlide = async (data, id) => {
  return await slideRequest.update(data, `${SLIDES_PATH}/${id}`);
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const deleteSlide = async (id) => {
  return await slideRequest.delete(`${SLIDES_PATH}/${id}`);
};

const slides = {
  addSlide,
  retrieveSlides,
  updateSlide,
  deleteSlide
};

export default slides;
