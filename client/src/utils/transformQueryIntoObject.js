/**
 *
 * @param {String} query
 */
const transformQueryIntoObject = (query) => {
    let queryCopy = query.concat("");
    const questionMarkIndex = queryCopy.indexOf("?");
    if (questionMarkIndex !== -1){
        queryCopy = queryCopy.slice((questionMarkIndex+1))
    }

    return queryCopy
        .split("&")
        .reduce((object, parameter) => {
            let [key, value] = parameter.split("=");
            if(value.includes(",")){
                value = [...value.split(",")]
            }
            object[key] = value;
            return object
        }, {});
}

export default transformQueryIntoObject;