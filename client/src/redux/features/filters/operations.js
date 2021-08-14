import actions from "./actions";
import transformQueryIntoObject from "../../../utils/transformQueryIntoObject";

const addFilter = (filter) => (dispatch) => {
    const sessionStorageData = JSON.parse(sessionStorage.getItem("filters")) || {};
    let newData = {...sessionStorageData, ...filter};

    Object.keys(filter)
        .forEach(key => {
            if (sessionStorageData[key]) {
                if (Array.isArray(filter[key])) {
                    newData = {
                        ...sessionStorageData,
                        [key] : [...sessionStorageData[key], ...filter[key]]
                    };
                    return
                }

                newData = {
                    ...sessionStorageData,
                    [key] : [...sessionStorageData[key], filter[key]]
                };
            }
        });
    sessionStorage.setItem("filters", JSON.stringify(newData));
    dispatch(actions.addFilter(filter))
}

const deleteFilterValue = (filterName, filterValue) => (dispatch) => {
    const sessionStorageData = JSON.parse(sessionStorage.getItem("filters")) || {};

    if (sessionStorageData[filterName] && sessionStorageData[filterName]?.length) {
        sessionStorageData[filterName] = sessionStorageData[filterName]
            .filter(value => value !== filterValue);

        if (!sessionStorageData[filterName].length) {
            delete sessionStorageData[filterName]
        }
        sessionStorage.setItem("filters", JSON.stringify(sessionStorageData));
    }


    dispatch(actions.deleteFilterValue(filterName, filterValue));
};

const deleteFilter = (filterName) => (dispatch) => {
    const sessionStorageData = JSON.parse(sessionStorage.getItem("filters")) || {};
    if (sessionStorageData[filterName]) {
        delete sessionStorageData[filterName];
        sessionStorageData.setItem("filters", JSON.stringify(sessionStorageData));
    }

    dispatch(actions.deleteFilter(filterName));
};

const deleteAllFilters = () => (dispatch) => {
    sessionStorage.setItem("filters", JSON.stringify({}));
    dispatch(actions.deleteAllFilters());
};

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
    const {filters} = getState();
    const sessionStorageData = JSON.parse(sessionStorage.getItem("filters"));
    const data = filtersFromQuery || sessionStorageData || filters || [];

    dispatch(actions.getFilters(data));
};


const operations = {
    addFilter,
    deleteFilterValue,
    deleteFilter,
    deleteAllFilters,
    getFilters,
};

export default operations;