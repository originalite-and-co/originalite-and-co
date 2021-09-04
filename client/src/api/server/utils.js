/**
 * This function returns request headers
 *
 * @returns {{Authorization: (string|null), "Content-Type": string}}
 */

const generateHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization:
    sessionStorage.getItem('token') || localStorage.getItem('token')
});

/**
 * This function generates custom exception
 *
 * @example
 * const retrieveUsers = async () => {
 *  try {
 *          const response = await fetch(something);
 *          if(!response.ok){
 *               throw generateResponseException("retrieve users", response);
 *           }
 *     } catch(error){
 *         throw generateFetchException("retrieving users", error);
 *     }
 * }
 *
 * @param {String} action - verb(Continuous form) and noun
 * that describe what action is supposed to have an error
 * @param {Error} [error] - Error object
 * @returns {Error}
 */
const generateFetchException = (action, error) => {
  let message = `An error has occurred while ${action}.`;
  if (error) {
    message += ` Error: ${error.message}`;
  }
  return new Error(message);
};

export { generateFetchException, generateHeaders };
