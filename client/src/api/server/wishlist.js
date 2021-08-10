import {
  generateFetchException,
  generateHeaders,
  generateResponseException
} from './index';

const WISHLIST_PATH = '/api/wishlist';

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */
const createWishlist = async (data) => {
  try {
    const response = await fetch(WISHLIST_PATH, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('create a wishlist', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('creating a wishlist', error);
  }
};

/**
 *
 * @returns {Promise<any>}
 */
const retrieveWishlist = async () => {
  try {
    const response = await fetch(WISHLIST_PATH, {
      method: 'GET',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('retrieve a wishlist', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving a wishlist', error);
  }
};

/**
 *
 * @param data
 * @returns {Promise<void>}
 */
const updateWishlist = async (data) => {
  try {
    const response = await fetch(WISHLIST_PATH, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('upate a wishlist', response);
    }
  } catch (error) {
    throw generateFetchException('updating a wishlist', error);
  }
};

/**
 *
 * @param {String} productId
 * @returns {Promise<any>}
 */
const addProductToWishlist = async (productId) => {
  try {
    const response = await fetch(`${WISHLIST_PATH}/${productId}`, {
      method: 'PUT',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('add product to a wishlist', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('updating a wishlist', error);
  }
};

/**
 *
 * @param {String} productId
 * @returns {Promise<any>}
 */
const deleteProductFromWishlist = async (productId) => {
  try {
    const response = await fetch(`${WISHLIST_PATH}/${productId}`, {
      method: 'DELETE',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException(
        'delete product from a wishlist',
        response
      );
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('deleting product from a wishlist', error);
  }
};

/**
 *
 * @returns {Promise<any>}
 */
const deleteWishlist = async () => {
  try {
    const response = await fetch(WISHLIST_PATH, {
      method: 'DELETE',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('delete a wishlist', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('deleting a wishlist', error);
  }
};

const wishlist = {
  createWishlist,
  retrieveWishlist,
  updateWishlist,
  addProductToWishlist,
  deleteProductFromWishlist,
  deleteWishlist
};

export default wishlist;
