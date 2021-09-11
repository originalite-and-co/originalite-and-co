/**
 *
 * @param {String} id
 * @param {String} parentId
 * @returns {String}
 */
function generateCategoryPath({ id, parentId }) {
  if (parentId === 'null') {
    return id;
  }

  return id.replace(`${parentId}-`, `${parentId}/`);
}

export default generateCategoryPath;
