import {generateFetchException, generateHeaders, generateResponseException} from "./index";

const SIZES_PATH = "/api/sizes";

/**
 *
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const createSize = async (data) => {
    try {
        const response = await fetch(SIZES_PATH, {
            method: "POST",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw generateResponseException("create a size", response);
        }

        return await response.json()
    } catch (error) {
        throw generateFetchException("creating a size", error);
    }
};

/**
 *
 * @returns {Promise<Array<Object>>}
 */
const retrieveSizes = async () => {
    try {
        const response = await fetch(SIZES_PATH, {
            method: "GET",
            headers: generateHeaders(),
        });

        if (!response.ok){
            throw generateResponseException("retrieve sizes", response);
        }

        return await response.json()
    } catch (error) {
        throw generateFetchException("retrieving sizes", error);
    }
};

/**
 *
 * @param {String} id
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const updateSize = async (id, data) => {
    try {
        const response = await fetch(`${SIZES_PATH}/${id}`, {
            method: "PUT",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw generateResponseException("update a size", response);
        }

        return await response.json()
    } catch (error) {
        throw generateFetchException("updating a size", error);
    }
};

/**
 *
 * @param {String} id
 * @returns {Promise<any>}
 */
const deleteSize = async (id) => {
    try {
        const response = await fetch(`${SIZES_PATH}/${id}`, {
            method: "DELETE",
            headers: generateHeaders(),
        });

        if (!response.ok){
            throw generateResponseException("delete a size", response);
        }

        return await response.json()
    } catch (error) {
        throw generateFetchException("deleting a size", error);
    }
};

const sizes = {
    createSize,
    retrieveSizes,
    updateSize,
    deleteSize
};

export default sizes;