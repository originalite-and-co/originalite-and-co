/**
 * This function returns request headers
 *
 * @returns {{Authorization: (string|null), "Content-Type": string}}
 */
export const generateHeaders = () => ({
    'Content-Type': 'application/json',
    Authorization: sessionStorage.getItem('token') || localStorage.getItem('token'),
});

/**
 * This function generates custom exception
 *
 * @param {String} action - verb and noun that describe what action is supposed to have an error
 * @param {Object} response - the fulfilled or rejected promise
 *
 * @returns {Error}
 *
 * @example
 * const retrieveUsers = async () => {
 *     const response = await fetch(something);
 *     if(!response.ok){
 *         throw generateResponseException("retrieve users", response);
 *     }
 * }
 *
 * */
export const generateResponseException = (action, response) => new Error(`Failed to ${action}, response: ${response.status} ${response.statusText}`);

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
 * @param {Error} error - Error object
 * @returns {Error}
 */
export const generateFetchException = (action, error) => new Error(`An error has occurred while ${action}. Error: ${error.message}`);

export {default as cartRequests} from './cart';
export {default as catalogRequests} from './catalog';
export {default as customerRequests} from './customers';
export {default as productRequests} from './products';
export {default as sliderRequests} from './slider';
export {default as wishlistRequests} from './wishlist';
export {default as linkRequests} from './links';
export {default as pageRequests} from './pages';
export {default as colorRequests} from './colors';
export {default as sizeRequests} from './sizes';