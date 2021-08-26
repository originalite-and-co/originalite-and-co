import { cartRequests } from "../../../api/server";

/**
 *
 * @param {Object} response
 * @returns {Array<Object>}
 */
const createCartFromResponse = (response) => {
  return response?.products?.map(({ cartQuantity, product, chosenSize }) => ({
    cartQuantity,
    chosenSize,
    _id: product._id,
    itemNo: product.itemNo,
  }));
};

/**
 *
 * @param {Array<Object>} currentCart
 * @param {Array<Object>}cartFromDB
 * @returns {Array<Object>}
 */

const concatCartFromDbWithCurrentOne = (currentCart, cartFromDB) => {
  return [...currentCart, ...cartFromDB].reduce((accumulator, cartItem) => {
    const isDuplicate = accumulator.some(({ _id }) => _id === cartItem._id);
    if (!isDuplicate) {
      return [...accumulator, cartItem];
    }
    return accumulator;
  }, []);
};

/**
 *
 * @param {Array<Object>} cart
 * @returns {Promise<void>}
 */
const updateApiCart = async (cart) => {
  const data = {};
  data.products = cart.map(({ cartQuantity, _id, itemNo }) => {
    return {
      product: _id,
      cartQuantity,
      itemNo,
    };
  });
  await cartRequests.updateCart(data);
};

const utils = {
  createCartFromResponse,
  concatCartFromDbWithCurrentOne,
  updateApiCart,
};

export default utils;
