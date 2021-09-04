import actions from './actions';
import transformQueryIntoObject from '../../../utils/transformQueryIntoObject';

/**
 *
 * @param{Object} [location] - location property from history object;
 * @returns {(function(*, *): void)|*}
 */
const getFilters = (location) => (dispatch, getState) => {
  let filtersFromQuery;

  if (location && location.search.length) {
    filtersFromQuery = transformQueryIntoObject(location.search);
  }
  const data = filtersFromQuery || [];

  dispatch(actions.getFilters(data));
};

const operations = {
  getFilters
};

export default operations;
