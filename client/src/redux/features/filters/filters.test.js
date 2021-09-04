import actions from './actions';
import types from './types';
import operations from './operations';
import reducers from './reducers';
import selectors from './selectors';

const {
  addFilter,
  deleteFilterValue,
  deleteFilter,
  deleteAllFilters,
  getFilters
} = actions;

const {
  ADDED_FILTER,
  DELETED_FILTER_VALUE,
  DELETED_FILTER,
  DELETED_ALL_FILTERS,
  GOT_FILTERS
} = types;

describe('filter feature', () => {
  describe('filter actions', () => {
    describe('addFilter', () => {
      test('If it throws when no arguments are passed', () => {
        expect(() => {
          addFilter(undefined);
        }).toThrowError(/data type/i);
      });

      test('If it throws when invalid argument type is passed', () => {
        expect(() => {
          addFilter('test');
        }).toThrowError(/data type/i);
      });

      test('If it returns correct object when all required arguments are provided', () => {
        const input = {
          colors: ['red']
        };

        const output = {
          type: ADDED_FILTER,
          payload: input
        };
        expect(addFilter(input)).toStrictEqual(output);
      });
    });

    describe('deleteFilterValue', () => {
      test('If it returns correct object when all required arguments are provided', () => {
        const input = {
          filterName: 'colors',
          filterValue: 'red'
        };

        const output = {
          type: DELETED_FILTER_VALUE,
          payload: input
        };

        expect(
          deleteFilterValue(input.filterName, input.filterValue)
        ).toStrictEqual(output);
      });
    });

    describe('deleteFilter', () => {
      test('If it returns correct object when all required arguments are provided', () => {
        const input = {
          filterName: 'colors'
        };

        const output = {
          type: DELETED_FILTER,
          payload: input.filterName
        };

        expect(deleteFilter(input.filterName)).toStrictEqual(output);
      });
    });

    describe('deleteAllFilters', () => {
      test('If it returns correct object when all required arguments are provided', () => {
        const output = {
          type: DELETED_ALL_FILTERS
        };
        expect(deleteAllFilters()).toStrictEqual(output);
      });
    });

    describe('getFilters', () => {
      test('If it returns correct object when all required arguments are provided', () => {
        const input = {
          colors: ['red', 'green']
        };

        const output = {
          type: GOT_FILTERS,
          payload: input
        };

        expect(getFilters(input)).toStrictEqual(output);
      });
    });
  });

  describe('filter operations', () => {
    describe('getFilters', () => {
      test('If it returns a function', () => {
        expect(typeof operations.getFilters()).toBe('function');
      });

      test('If dispatch is called', () => {
        const dispatch = jest.fn((obj) => obj);
        const getState = jest.fn(() => ({
          filters: {
            colors: ['red']
          }
        }));

        operations.getFilters()(dispatch, getState);
        expect(dispatch).toHaveBeenCalled();
      });
    });
  });

  describe('filter reducer', () => {
    const { filters: filterReducer } = reducers;
    const initAction = {
      type: '@@INIT'
    };
    test('If it returns default value', () => {
      expect(filterReducer(undefined, initAction)).toStrictEqual({});
    });

    test('If it return state in case action type is not defined', () => {
      const state = {
        colors: ['red', 'green']
      };
      expect(filterReducer(state, initAction)).toStrictEqual(state);
    });

    test('if it returns correct object in case ADDED_FILTER action is passed', () => {
      const state = {
        colors: ['red', 'green']
      };

      const action = addFilter({
        sizes: 's'
      });

      const { payload } = action;
      const output = {
        ...state,
        ...payload
      };

      expect(filterReducer(state, action)).toStrictEqual(output);
    });

    test('If it throws an error in case filter value is not an array when DELETED_FILTER_VALUE action is passed', () => {
      const state = {
        minPrice: '200'
      };

      const action = deleteFilterValue('minPrice', '200');
      expect(() => {
        filterReducer(state, action);
      }).toThrowError(/data type/i);
    });

    test('If it returns correct object in case DELETED_FILTER_VALUE action is passed', () => {
      const state = {
        colors: ['red', 'green']
      };

      const action = deleteFilterValue('colors', 'red');

      const output = {
        colors: ['green']
      };

      expect(filterReducer(state, action)).toStrictEqual(output);
    });

    test('if it deletes a filter when the last item of an array was deleted in case DELETED_FILTER_VALUE action is passed', () => {
      const state = {
        colors: ['red']
      };

      const action = deleteFilterValue('colors', 'red');

      const output = {};

      expect(filterReducer(state, action)).toStrictEqual(output);
    });

    test('If it deletes filter value in case DELETED_FILTER_VALUE action is passed', () => {
      const minPriceState = {
        minPrice: '200'
      };

      const colorsState = {
        colors: ['red', 'green']
      };

      const minPriceAction = deleteFilter('minPrice');
      const minPriceOutput = {};

      const colorsAction = deleteFilter('colors');
      const colorsOutput = {};

      expect(filterReducer(minPriceState, minPriceAction)).toStrictEqual(
        minPriceOutput
      );

      expect(filterReducer(colorsState, colorsAction)).toStrictEqual(
        colorsOutput
      );
    });

    test('If it deletes all filters when DELETED_ALL_FILTERS action is passed', () => {
      const state = {
        minPrice: '200',
        colors: ['red', 'green']
      };

      const action = deleteAllFilters();

      const output = {};

      expect(filterReducer(state, action)).toStrictEqual(output);
    });

    test('If it returns data that was retrieved when GOT_FILTERS action is passed', () => {
      const state = {};

      const data = {
        colors: ['red', 'green']
      };

      const action = getFilters(data);

      expect(filterReducer(state, action)).toStrictEqual(data);
    });
  });

  describe('filter selectors', () => {
    test('if getFilters returns filters', () => {
      const state = {
        filters: {
          colors: ['red', 'green']
        },
        cart: ['1', '2']
      };

      expect(selectors.getFilters(state)).toStrictEqual(state.filters);
    });

    test('If getFiltersQuery returns a query', () => {
      const state = {
        filters: {
          colors: ['red', 'green'],
          minPrice: '200'
        }
      };

      const output = 'colors=red,green&minPrice=200';

      expect(selectors.getFiltersQuery(state)).toMatch(output);
    });
  });
});
