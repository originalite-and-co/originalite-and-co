import { generateFetchException, generateHeaders } from './utils.js';
import ServerApiRequests from './ServerApiRequests';

const CUSTOMERS_PATH = '/api/customers';

// debugger
const headers = generateHeaders();

const exceptions = {
  create: generateFetchException('creating a customer'),
  retrieve: generateFetchException('retrieving the customer'),
  update: generateFetchException('updating the customer'),
  delete: generateFetchException('deleting the customer'),
};

const customerRequests = new ServerApiRequests(
  CUSTOMERS_PATH,
  headers,
  exceptions,
);

/**
 * This function adds token to the sessionStorage
 *
 * @param {String} token - authorization token
 */
const addTokenToSessionStorage = (token) => {
  sessionStorage.setItem('token', token);
};

/**
 * This function adds token to the localStorage
 *
 * @param {String} token  - authorization token
 */
const addTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
};

/**
 *This function sends POST request to the server and returns the result
 *
 * @param {Object} data - Object with customer details
 * @returns {Promise<Object>} - created customer with _id
 */
const createCustomer = async (data) => {
  return await customerRequests.create(data);
};

/**
 * This function logs in a user and save their token to sessionStorage
 *
 * @param {Object} credentials - {
 *     loginOrEmail: String,
 *     password: String
 * }
 *
 * @param {boolean} keepLoggedIn
 */
const logIn = async (credentials, keepLoggedIn) => {
  const exception = generateFetchException('logging in');
  const data = await customerRequests.create(
    credentials,
    `${CUSTOMERS_PATH}/login`,
    generateHeaders(),
    exception,
  );

  if (keepLoggedIn) {
    addTokenToLocalStorage(data.token);
    return;
  }
  addTokenToSessionStorage(data.token);
};

/**
 * This function retrieves customer information using their token
 *
 * @returns {Promise<Object>} - customer
 */
const retrieveCustomer = async () => {
  return await customerRequests.retrieve(
    `${CUSTOMERS_PATH}/customer`,
    generateHeaders(),
  );
};

/**
 * This function updates customer by their token
 *
 * @param {Object} data - data that should be updated
 * @returns {Promise<Object>} - updated customer
 */
const updateCustomer = async (data) => {
  return await customerRequests.update(
    data,
    `${CUSTOMERS_PATH}`,
    generateHeaders(),
  );
};

/**
 * This function changes prev password to a new one
 *
 * @param {String} previousPassword
 * @param {String} newPassword
 * @returns {Promise<Object>}
 */
const changeCustomerPassword = async (previousPassword, newPassword) => {
  const data = {
    password: previousPassword,
    newPassword,
  };

  const exception = generateFetchException('changing the customer password');
  return await customerRequests.update(
    data,
    `${CUSTOMERS_PATH}/password`,
    exception,
  );
};

const customers = {
  createCustomer,
  logIn,
  retrieveCustomer,
  changeCustomerPassword,
  updateCustomer,
};

export default customers;
