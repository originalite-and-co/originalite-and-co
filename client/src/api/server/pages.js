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

const retrievePages = async () => {
    try {
        const response = await fetch(PAGES_PATH, {
            method: "GET",
            headers: generateHeaders()
        });

        if (!response.ok) {
            throw generateResponseException("retrieve pages", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("retrieving pages", error);
    }
}

/**
 *
 * @param {String} customId
 * @returns {Promise<any>}
 */
const retrievePage = async (customId) => {
    try {
        const response = await fetch(`${PAGES_PATH}/${customId}`, {
            method: "GET",
            headers: generateHeaders()
        });

        if (!response.ok) {
            throw generateResponseException("retrieve a page", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("retrieving a page", error);
    }
};

/**
 *
 * @param {Object} data
 * @param {String} customId
 * @returns {Promise<any>}
 */
const updatePage = async (data, customId) => {
    try {
        const response = await fetch(`${PAGES_PATH}/${customId}`, {
            method: "PUT",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw generateResponseException("update a page", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("updating a page", error);
    }
};

const deletePage = async (customId) => {
    try{
        const response = await fetch(`${PAGES_PATH}/${customId}`, {
            method: "DELETE",
            headers: generateHeaders()
        });

        if (!response.ok) {
            throw generateResponseException("delete a page", response);
        }

        return await response.json();
    } catch (error) {
        throw generateFetchException("deleting a page", error);
    }
}

const pages = {
    createPage,
    retrievePages,
    retrievePage,
    updatePage,
    deletePage
};

export default pages;