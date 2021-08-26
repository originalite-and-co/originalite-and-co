/**
 *
 * @param {String | Response} input
 * @returns {boolean}
 */
const isJSON = async (input) => {
  const isResponse = input.__proto__ === new Response().__proto__;
  if (typeof input !== "string" && !isResponse) {
    throw new TypeError(
      `Invalid data. Expected a string or a Response, but got ${typeof input}, ${
        input.__proto__
      }`
    );
  }

  try {
    if (isResponse) {
      const responseCopy = input.clone();
      await responseCopy.json();
    } else {
      JSON.parse(input);
    }
  } catch (error) {
    return false;
  }
  return true;
};

export default isJSON;
