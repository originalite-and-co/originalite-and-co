import {generateFetchException, generateHeaders, generateResponseException} from "./index";

const CATALOG_PATH = "/api/catalog";


export const createCatalog = async (data) => {
    try {
        const response = await fetch(CATALOG_PATH, {
            method: "POST",
            headers: generateHeaders(),
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw generateResponseException("create catalog", response)
        }
        return await response.json();
    } catch (error) {
        throw generateFetchException("creating catalog", error)
    }
}