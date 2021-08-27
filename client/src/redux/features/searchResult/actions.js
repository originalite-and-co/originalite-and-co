import types from './types';

const { SET_SEARCH_RESULT, DELETE_SEARCH_RESULT } = types;

/**
 *
 * @param {Object[]} data - array of objects
 * @returns {{payload: array, type: string}}
 */
const setSearchResult = (data) => ({
  type: SET_SEARCH_RESULT,
  payload: data,
});

/**
 *
 * @returns {{type: string}}
 */
const deleteSearchResult = () => ({
  type: DELETE_SEARCH_RESULT,
});

const actions = {
  setSearchResult,
  deleteSearchResult,
};

export default actions;
