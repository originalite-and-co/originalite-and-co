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
    switch (type) {
        case ADDED_FILTER: {
            return addFilter(state, payload);
        }
        case DELETED_FILTER_VALUE: {
            if(!Array.isArray(state[payload.filterName])){
                throw new Error(
                    `Invalid data type of filter value.
                 Expected Array, got ${state[payload.filterName]}`
                );
            }
            return deleteFilterValue(state, payload);
        }
        case DELETED_FILTER : {
            const stateCopy = {...state};
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

export default {
    filters: reducer
}

function addFilter(state, payload){
    let stateCopy = {...state}
    Object.keys(payload)
        .forEach(key => {
            if (stateCopy[key]){
                if(Array.isArray(payload[key])){
                    stateCopy[key] = [...stateCopy[key], ...payload[key]];
                    return;
                }

                stateCopy[key]=[...stateCopy[key], payload[key]];
                return;
            }

            stateCopy = {
                ...stateCopy,
                ...payload
            }
        });

    return stateCopy;
}

function deleteFilterValue(state, payload) {
    const stateCopy = {...state};
    const filterValue = stateCopy[payload.filterName]

    stateCopy[payload.filterName] = filterValue
        .filter(value => value !== payload.filterValue);

    //can't use a variable here because its value doesn't update
    if (!stateCopy[payload.filterName].length) {
        delete stateCopy[payload.filterName];
    }

    return stateCopy
}