/**
 *
 * @param {String} id
 * @param {String} parentId
 * @returns {String}
 */
function generateCategoryPath({id, parentId}) {
    return id.replace(`${parentId}-`, `${parentId}/`);
}

export default generateCategoryPath;