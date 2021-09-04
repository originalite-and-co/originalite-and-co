import types from './types';

const { SET_SEARCH_RESULT, DELETE_SEARCH_RESULT } = types;

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_RESULT: {
      return payload;
    }
    case DELETE_SEARCH_RESULT: {
      return [];
    }
    default: {
      return state;
    }
  }
};

const reducers = {
  searchResult: reducer
};

export default reducers;
