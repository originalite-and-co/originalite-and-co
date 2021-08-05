import {
  generateHeaders,
  generateResponseException,
  generateFetchException,
} from './index';

const CUSTOMERS_PATH = '/api/customers';

/**
 * This function adds token to the sessionStorage
 *
 * @param {String} token - authorization token
 */
const addTokenToSessionStorage = (token) => {
  sessionStorage.setItem('token', token);
};

/**
 *This function sends POST request to the server and returns the result
 *
 * @param {Object} data - Object with customer details
 * @returns {Promise<any>} - created customer with _id
 */
const createCustomer = async (data) => {
  try {
    const response = await fetch(CUSTOMERS_PATH, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw generateResponseException('create customer', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('creating customer', error);
  }
};

/**
 * This function logs in a user and save their token to sessionStorage
 *
 * @param {Object} credentials - {
 *     loginOrEmail: String,
 *     password: String
 * }
 * @returns {Promise<void>}
 */
const logIn = async (credentials) => {
  try {
    const response = await fetch(`${CUSTOMERS_PATH}/login`, {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw generateResponseException('log in', response);
    }

    addTokenToSessionStorage(await response.json());
  } catch (error) {
    throw generateFetchException('Loggin in', error);
  }
};

/**
 * This function retrieves customer information using their token
 *
 * @returns {Promise<any>} - customer
 */
const retrieveCustomer = async () => {
  try {
    const response = await fetch(`${CUSTOMERS_PATH}/customer`, {
      method: 'GET',
      headers: generateHeaders(),
    });

    if (!response.ok) {
      throw generateResponseException('retrieve customer', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('retrieving customer', error);
  }
};

/**
 * This function updates customer by their token
 *
 * @param {Object} data - data that should be updated
 * @returns {Promise<any>} - updated customer
 */
const updateCustomer = async (data) => {
  try {
    const response = await fetch(CUSTOMERS_PATH, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw generateResponseException('update customer', response);
    }

    return await response.json();
  } catch (error) {
    throw generateFetchException('updating customer', error);
  }
};

/**
 * This function changes prev password to a new one
 *
 * @param {String} previousPassword
 * @param {String} newPassword
 * @returns {Promise<*>}
 */
const changeCustomerPassword = async (previousPassword, newPassword) => {
  try {
    const response = await fetch(`${CUSTOMERS_PATH}/password`, {
      method: 'PUT',
      headers: generateHeaders(),
      body: JSON.stringify({
        password: previousPassword,
        newPassword,
      }),
    });

    if (!response.ok) {
      throw generateResponseException('change customer password', response);
    }

    const obj = await response.json();
    return obj.customer;
  } catch (error) {
    throw generateFetchException('changing customer password', error);
  }
};

const customers = {
  changeCustomerPassword,
  createCustomer,
  logIn,
  retrieveCustomer,
  updateCustomer,
};

export default customers;
