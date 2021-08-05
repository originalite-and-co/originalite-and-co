import {generateFetchException, generateHeaders, generateResponseException} from "./index";

const LINKS_PATH = "/api/links";

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */
const createLinks = async (data) => {
    try {
        const response = await fetch(LINKS_PATH, {
            method: "POST",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw generateResponseException("create links", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("creating links", error);
    }
};

/**
 * @returns {Promise<any>}
 */
const retrieveLinks = async () => {
    try {
        const response = await fetch(LINKS_PATH, {
            method: "GET",
            headers: generateHeaders(),
        });

        if (!response.ok) {
            throw generateResponseException("retrieve links", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("retrieving links", error)
    }
};

/**
 *
 * @param {String} linkId
 * @returns {Promise<any>}
 */
const retrieveLinkById = async (linkId) => {
    try {
        const response = await fetch(`${LINKS_PATH}/${linkId}`, {
            method: "GET",
            headers: generateHeaders()
        });
        if (!response.ok) {
            throw generateResponseException("retrieve link by id", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("retrieving link by id", error)
    }
};

/**
 *
 * @param {Object} data
 * @param {String} linkId
 * @returns {Promise<any>}
 */
const updateLink = async (data, linkId) => {
    try {
        const response = await fetch(`${LINKS_PATH}/${linkId}`, {
            method: "PUT",
            headers: generateHeaders(),
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw generateResponseException("update a link", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("updating a link", error);
    }
};

/**
 *
 * @param {String} linkId
 * @returns {Promise<any>}
 */
const deleteLink = async (linkId) => {
    try {
        const response = await fetch(`${LINKS_PATH}/${linkId}`, {
            method: "DELETE",
            headers: generateHeaders(),
        });

        if (!response.ok) {
            throw generateResponseException("delete a link", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("deleting a link", error);
    }
}

const links = {
    createLinks,
    retrieveLinks,
    retrieveLinkById,
    updateLink,
    deleteLink
};

export default links;