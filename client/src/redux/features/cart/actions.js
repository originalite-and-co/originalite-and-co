import types from './types';

const {
  GOT_CART,
  ADDED_PRODUCT_TO_CART,
  DECREASED_PRODUCT_QUANTITY,
  DELETED_PRODUCT_FROM_CART,
  DELETED_CART,
} = types;

/**
 *
 * @param {Array<Object>} cartProducts
 * @returns {{payload, type: string}}
 */
const getCart = (cartProducts) => ({
  type: GOT_CART,
  payload: cartProducts,
});

/**
 *
 * @param {Array<Object>} cartProducts
 * @returns {{payload, type: string}}
 */
const addProductToCart = (cartProducts) => ({
  type: ADDED_PRODUCT_TO_CART,
  payload: cartProducts,
});

/**
 *
 * @param {Array<Object>} cartProducts
 * @returns {{payload, type: string}}
 */
const decreaseProductQuantity = (cartProducts) => ({
  type: DECREASED_PRODUCT_QUANTITY,
  payload: cartProducts,
});

/**
 *
 * @param {Array<Object>} cartProducts
 * @returns {{payload, type: string}}
 */
const deleteProductFromCart = (cartProducts) => ({
  type: DELETED_PRODUCT_FROM_CART,
  payload: cartProducts,
});

/**
 *
 * @returns {{type: string}}
 */
const deleteCart = () => ({
  type: DELETED_CART,
});

const actions = {
  getCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  deleteCart,
};

export default actions;
