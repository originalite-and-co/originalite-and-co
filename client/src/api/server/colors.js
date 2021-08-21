import {
    generateFetchException,
    generateHeaders
} from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const COLORS_PATH = "/api/colors"

const headers = generateHeaders();

const exceptions = {
    create: generateFetchException("creating a color"),
    retrieve: generateFetchException("retrieving colors"),
    update: generateFetchException("updating the color"),
    delete: generateFetchException("deleting the color"),
};

const colorRequests = new ServerApiRequests(COLORS_PATH, headers, exceptions);

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const createColor = async (data) => {
    return await colorRequests.create(data);
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */
const retrieveColors = async () => {
    return await colorRequests.retrieve();
};

/**
 *
 * @param {String} id
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const updateColor = async (id, data) => {
    return await colorRequests.update(data, `${COLORS_PATH}/${id}`)
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const deleteColor = async (id) => {
    return await colorRequests.delete(`${COLORS_PATH}/${id}`);
};

const colors = {
    createColor,
    retrieveColors,
    updateColor,
    deleteColor
};

export default colors;