import {
  generateFetchException,
  generateHeaders,
  generateResponseException
} from './index';

const PRODUCTS_PATH = '/api/products';

/**
 * This function creates product
 * @param {Object} data
 * @returns {Promise<any>}
 */
const createProduct = async (data) => {
  try {
    const response = await fetch(PRODUCTS_PATH, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('create product', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('creating product', error);
  }
};

/**
 * This function returns a found product card
 *
 * @param {Object} data - {
 *     query: "Some query "
 * }
 * @returns {Promise<any>}
 */
const searchForProduct = async (data) => {
  try {
    const response = await fetch(`${PRODUCTS_PATH}/search`, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('search for a product', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('searching for a product', error);
  }
};

/**
 * This function returns a collection(array) of products
 * @returns {Promise<any>}
 */
const retrieveProduct = async () => {
  try {
    const response = await fetch(PRODUCTS_PATH, {
      method: 'GET',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('retrieve product', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving product', error);
  }
};

/**
 *This function returns one product that has the same itemNo prop as it was passed
 * @param {String} itemNumber
 * @returns {Promise<any>}
 */
const retrieveProductByItemNumber = async (itemNumber) => {
  try {
    const response = await fetch(`${PRODUCTS_PATH}/${itemNumber}`, {
      method: 'GET',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException(
        'retrieve product by item number',
        response
      );
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving product by item number', error);
  }
};

/**
 *
 * @param {String} query - query in form "property=value&property2=value"
 * @returns {Promise<any>}
 */

const retrieveByQuery = async (query) => {
  try {
    const response = await fetch(`${PRODUCTS_PATH}/filter?${query}`, {
      method: 'GET',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('retrieve product by query', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving product by query', error);
  }
};

/**
 * This function updates product and returns new version of it
 *
 * @param {String} id - product id
 * @param data - data that needs to be updated
 * @returns {Promise<any>}
 */
const updateProduct = async (id, data) => {
  try {
    const response = await fetch(`${PRODUCTS_PATH}/${id}`, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('update product', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('updating product', error);
  }
};

const product = {
  createProduct,
  searchForProduct,
  retrieveProduct,
  retrieveProductByItemNumber,
  retrieveByQuery,
  updateProduct
};

export default product;
