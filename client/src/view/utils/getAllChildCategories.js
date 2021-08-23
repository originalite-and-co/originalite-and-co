/**
 *
 * @param {Array<Object>} catalog
 * @param {String} linkId - an id by which the function will look for the children
 * @returns {Array<Object>}
 */
function getAllChildCategories(catalog, linkId) {
  const dependencies = [linkId];
  const result = [];
  const catalogCopy = [...catalog];

  const findCategory = () => {
    catalogCopy.forEach((category, index) => {
      dependencies.forEach((dependency) => {
        if (category.parentId.toLowerCase() === dependency.toLowerCase()) {
          dependencies.push(category.id.toLowerCase());
          result.push(category);
          catalogCopy.splice(index, 1);
          findCategory();
        }
      });
    });
  };
  findCategory();
  return result;
}

export default getAllChildCategories;
