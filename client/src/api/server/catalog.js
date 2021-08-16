import {
  generateFetchException,
  generateHeaders,
  generateResponseException,
} from './index';

const CATALOG_PATH = '/api/catalog';

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const createCatalog = async (data) => {
  try {
    const response = await fetch(CATALOG_PATH, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw generateResponseException('create a catalog', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('creating a catalog', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const updateCatalog = async (data) => {
  try {
    const response = await fetch(CATALOG_PATH, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw generateResponseException('update catalog', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('updating a catalog', error);
  }
};

/**
 * @returns {Promise<any>}
 */

const retrieveCatalog = async () => {
  try {
    const response = await fetch(CATALOG_PATH, {
      method: 'GET',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('retrieve a catalog', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving a catalog', error);
  }
};

/**
 *
 * @param {String} id
 * @returns {Promise<any>}
 */

const retrieveCategory = async (id) => {
  try {
    const response = await fetch(`${CATALOG_PATH}/${id}`, {
      method: 'GET',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('retrieve a category', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving a category', error);
  }
};

/**
 *
 * @param {String} id
 * @returns {Promise<any>}
 */

const deleteCategory = async (id) => {
  try {
    const response = await fetch(`${CATALOG_PATH}/${id}`, {
      method: 'DELETE',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('delete category', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('deleting category', error);
  }
};

const catalog = {
  deleteCategory,
  retrieveCategory,
  retrieveCatalog,
  updateCatalog,
  createCatalog,
};

export default catalog;
