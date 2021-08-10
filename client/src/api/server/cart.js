import {
  generateFetchException,
  generateHeaders,
  generateResponseException
} from './index';

const CART_PATH = '/api/cart';

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const createCart = async (data) => {
  try {
    const response = await fetch(CART_PATH, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('create cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('creating cart', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const updateCart = async (data) => {
  try {
    const response = await fetch(CART_PATH, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('update cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('updating cart', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const addProductToCart = async (data, id) => {
  try {
    const response = await fetch(`${CART_PATH}/${id}`, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw generateResponseException('decrease cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('decreasing cart', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const decreaseProductQuantity = async (id) => {
  try {
    const response = await fetch(`${CART_PATH}/product/${id}`, {
      method: 'DELETE',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('decrease cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('decreasing cart', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const deleteProductFromCart = async (id) => {
  try {
    const response = await fetch(`${CART_PATH}/${id}`, {
      method: 'DELETE',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('delete from cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('deletting from cart', error);
  }
};

/**
 *
 * @param {Object} data
 * @returns {Promise<any>}
 */

const getCart = async () => {
  try {
    const response = await fetch(CART_PATH, {
      method: 'GET',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('get cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('getting category', error);
  }
};

const deleteCart = async () => {
  try {
    const response = await fetch(CART_PATH, {
      method: 'DELETE',
      headers: generateHeaders()
    });

    if (!response.ok) {
      throw generateResponseException('delete cart', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('deleting cart', error);
  }
};

const cart = {
  createCart,
  updateCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  getCart,
  deleteCart
};

export default cart;
