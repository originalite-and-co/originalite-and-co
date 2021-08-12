/**
 *
 * @param {Object} state
 * @param {String} type,
 * @param {*} payload
 */
import types from "./types";

const {
    ADDED_FILTER,
    DELETED_FILTER_VALUE,
    DELETED_FILTER,
    DELETED_ALL_FILTERS,
    GOT_FILTERS
} = types;

const reducer = (state = {}, {type, payload}) => {
        switch (type){
            case ADDED_FILTER:{
                return {
                    ...state,
                    payload
                }
            }
            case DELETED_FILTER_VALUE:{
                const stateCopy = {...state};
                stateCopy[payload.filterName] = stateCopy[payload.filterName]
                    .filter(value => value !== payload.filterValue);
                return stateCopy;
            }
            case DELETED_FILTER :{
                const stateCopy = {...state};
                delete stateCopy[payload];
                return stateCopy;
            }
            case DELETED_ALL_FILTERS:{
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

export default {
    filters: reducer
}