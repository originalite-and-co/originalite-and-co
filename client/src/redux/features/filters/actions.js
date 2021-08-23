import types from './types';

const {
  ADDED_FILTER,
  DELETED_FILTER_VALUE,
  DELETED_FILTER,
  DELETED_ALL_FILTERS,
  GOT_FILTERS
} = types;

/**
 *
 * @param {Object} filter {filterName: [filterValue1, filterValue2]}
 * @returns {{payload: object, type: string}}
 */
const addFilter = (filter) => {
  if (typeof filter !== 'object' || filter === null) {
    throw new Error(`Invalid data type. Expected Object, got ${typeof value}`);
  }

  return {
    type: ADDED_FILTER,
    payload: filter
  };
};

/**
 *This function deletes a filter value in case it's an array.
 *  If not, use deleteFilter instead
 *
 * @param {String} filterName
 * @param {String} filterValue
 * @returns {{payload: {filterValue, filterName}, type: string}}
 */
const deleteFilterValue = (filterName, filterValue) => ({
  type: DELETED_FILTER_VALUE,
  payload: {
    filterName,
    filterValue
  }
});

/**
 *
 * @param {String} filterName
 * @returns {{payload, type: string}}
 */
const deleteFilter = (filterName) => ({
  type: DELETED_FILTER,
  payload: filterName
});

/**
 *
 * @returns {{type: string}}
 */
const deleteAllFilters = () => ({
  type: DELETED_ALL_FILTERS
});

/**
 * @returns {{type: string, payload: object}}
 */
const getFilters = (filters) => ({
  type: GOT_FILTERS,
  payload: filters
});

const actions = {
  addFilter,
  deleteFilterValue,
  deleteFilter,
  deleteAllFilters,
  getFilters
};

export default actions;
