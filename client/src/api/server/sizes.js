import {
    generateFetchException,
    generateHeaders
} from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const SIZES_PATH = "/api/sizes";

const headers = generateHeaders();

const exceptions = {
    create: generateFetchException("creating a size"),
    retrieve: generateFetchException("retrieving sizes"),
    update: generateFetchException("updating the size"),
    delete: generateFetchException("deleting the size"),
};

const sizeRequests = new ServerApiRequests(SIZES_PATH, headers, exceptions);


/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const createSize = async (data) => {
    return await sizeRequests.create(data)
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */
const retrieveSizes = async () => {
    return await sizeRequests.retrieve()
};

/**
 *
 * @param {String} id
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const updateSize = async (id, data) => {
    return await sizeRequests.update(data, `${SIZES_PATH}/${id}`);
};

/**
 *
 * @param {String} id
 * @returns {Promise<any>}
 */
const deleteSize = async (id) => {
    return await sizeRequests.delete(`${SIZES_PATH}/${id}`);
};

const sizes = {
    createSize,
    retrieveSizes,
    updateSize,
    deleteSize
};

export default sizes;