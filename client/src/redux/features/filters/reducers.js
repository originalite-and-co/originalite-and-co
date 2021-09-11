import types from './types';
import utils from './utils';

const {
  ADDED_FILTER,
  DELETED_FILTER_VALUE,
  DELETED_FILTER,
  DELETED_ALL_FILTERS,
  GOT_FILTERS
} = types;

const { addFilter, deleteFilterValue } = utils;

/**
 *
 * @param {Object} state
 * @param {String} type,
 * @param {*} payload
 */
const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADDED_FILTER: {
      return addFilter(state, payload);
    }
    case DELETED_FILTER_VALUE: {
      if (!Array.isArray(state[payload.filterName])) {
        throw new Error(
          `Invalid data type of filter value.
                 Expected Array, got ${state[payload.filterName]}`
        );
      }
      return deleteFilterValue(state, payload);
    }
    case DELETED_FILTER: {
      const stateCopy = { ...state };
      delete stateCopy[payload];
      return stateCopy;
    }
    case DELETED_ALL_FILTERS: {
      return {};
    }
    case GOT_FILTERS: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

const reducers = {
  filters: reducer
};

export default reducers;
