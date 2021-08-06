import {generateFetchException, generateHeaders, generateResponseException} from "./index";

const PAGES_PATH = "/api/pages";

/**
 *
 * @param {Object} data - {
 *       "customId": "test",
 *       "title": "Test",
 *       "htmlContent": "<h1>Test</h1>",
 *       url: "/test/test"
 * }
 * @returns {Promise<any>}
 */
const createPage = async (data) => {
    try {
        const response = await fetch(PAGES_PATH, {
            method: "POST",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw generateResponseException("create a page", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("creating a page", error);
    }
};

/**
 *
 * @param {String} customId
 * @returns {Promise<any>}
 */
const retrieveLink = async (customId) => {
    try {
        const response = await fetch(`${PAGES_PATH}/${customId}`, {
            method: "GET",
            headers: generateHeaders()
        });

        if (!response.ok) {
            throw generateResponseException("retrieve a link", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("retrieving a link", error);
    }
};

/**
 *
 * @param {Object} data
 * @param {String} customId
 * @returns {Promise<any>}
 */
const updateLink = async (data, customId) => {
    try {
        const response = await fetch(`${PAGES_PATH}/${customId}`, {
            method: "PUT",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw generateResponseException("update a link", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("updating a link", error);
    }
};

const deleteLink = async (customId) => {
    try{
        const response = await fetch(`${PAGES_PATH}/${customId}`, {
            method: "DELETE",
            headers: generateHeaders()
        });

        if (!response.ok) {
            throw generateResponseException("delete a link", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("deleting a link", error);
    }
}

const pages = {
    createPage,
    retrieveLink,
    updateLink,
    deleteLink
};

export default pages;