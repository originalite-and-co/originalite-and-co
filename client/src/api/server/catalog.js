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
      throw generateResponseException('create catalog', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('creating catalog', error);
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
    throw generateFetchException('updating catalog', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const getCatalog = async () => {
  try {
    const response = await fetch(CATALOG_PATH, {
      method: 'GET',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('get catalog', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('getting catalog', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const getCategory = async (id) => {
  try {
    const response = await fetch(`${CATALOG_PATH}/${id}`, {
      method: 'POST',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('get category', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('getting category', error);
  }
};

/**
 *
 * @param {Object} data
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
  getCategory,
  getCatalog,
  updateCatalog,
  createCatalog,
};

export default catalog;
