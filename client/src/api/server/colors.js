import {generateFetchException, generateHeaders, generateResponseException} from "./index";

const COLORS_PATH = "/api/colors"

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */
const createColor = async (data) => {
    try {
        const response = await fetch(COLORS_PATH,{
            method: "POST",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw generateResponseException("create a color", response);
        }

        return await response.json();
    } catch (error){
        generateFetchException("creating a color", error);
    }
};

/**
 *
 * @returns {Promise<Array<String>>}
 */
const retrieveColors = async () => {
    try{
        const response = await fetch(COLORS_PATH,{
            method: "GET",
            headers: generateHeaders(),
        });

        if (!response.ok){
            throw generateResponseException("retrieve colors", response);
        }

        return await response.json();
    } catch (error){
        generateFetchException("retrieving colors", error);
    }
};

/**
 *
 * @param {String} id
 * @param {Object} data
 * @returns {Promise<Object>}
 */
const updateColor = async (id, data) => {
    try{
        const response = await fetch(`${COLORS_PATH}/${id}`,{
            method: "PUT",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw generateResponseException("update a color", response);
        }

        return await response.json();
    } catch(error){
        throw generateFetchException("updating a color", error);
    }
};

/**
 *
 * @param {String} id
 * @returns {Promise<any>}
 */
const deleteColor = async (id) => {
    try{
        const response = await fetch(`${COLORS_PATH}/${id}`,{
            method: "DELETE",
            headers: generateHeaders(),
        });

        if (!response.ok){
            throw generateResponseException("delete a color", response);
        }

        return await response.json();
    } catch(error){
        throw generateFetchException("deleting a color", error);
    }
};

const colors = {
    createColor,
    retrieveColors,
    updateColor,
    deleteColor
};

export default colors;