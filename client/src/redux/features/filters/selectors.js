const getFilters = state => state.filters;

const getFiltersQuery = state => {
    const {filters} = state;

    Object.entries(filters)
        /**Object.entries returns array of arrays. Each array has key and value */
        .reduce((queryString, [key, value]) => {

            const parameterValue = value.join(",");
            const parameter = `${key}=${parameterValue}`;
            return queryString.length
                ? queryString.concat(`&${parameter}`)
                : queryString.concat(parameter);
        }, "");
};

const selectors = {
    getFilters,
    getFiltersQuery
};

export default selectors;