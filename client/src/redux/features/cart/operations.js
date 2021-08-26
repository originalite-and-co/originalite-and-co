import { cartRequests } from "../../../api/server";
import actions from "./actions";
import utils from "./utils";

const {
  createCartFromResponse,
  concatCartFromDbWithCurrentOne,
  updateApiCart,
} = utils;

/**
 *
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const getCart = () => async (dispatch, getState) => {
  const { cart: currentCart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.retrieveCart();
    if (!response) {
      await cartRequests.createCart();
      return dispatch(actions.getCart([]));
    }
    const cartFromAPi = createCartFromResponse(response);

    let cart = cartFromAPi;
    if (currentCart?.length) {
      cart = concatCartFromDbWithCurrentOne(currentCart, cartFromAPi);
    }
    await updateApiCart(cart);
    return dispatch(actions.getCart(cart));
  }

  dispatch(actions.getCart(currentCart));
};

/**
 *
 * @param {String} id - id of the product that needs to be added
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const addProductToCart = (id) => async (dispatch, getState) => {
  const { cart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.addProductToCart(id);
    const cartFromAPi = createCartFromResponse(response);
    return dispatch(actions.addProductToCart(cartFromAPi));
  }

  const cartCopy = [...cart];
  const itemInCart = cartCopy.find(({ _id }) => _id === id);
  if (itemInCart) {
    itemInCart.cartQuantity += 1;
  } else {
    cartCopy.push({ cartQuantity: 1, _id: id });
  }
  dispatch(actions.addProductToCart(cartCopy));
};

/**
 *
 * @param {String} id - id of the product which amount needs to be decreased
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const decreaseProductQuantity = (id) => async (dispatch, getState) => {
  const { cart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.decreaseProductQuantity(id);
    const cartFromAPi = createCartFromResponse(response);
    return dispatch(actions.decreaseProductQuantity(cartFromAPi));
  }

  const cartCopy = [...cart];
  const itemInCart = cartCopy.find(({ _id }) => _id === id);
  if (!itemInCart) {
    throw new Error("There is no item with such id");
  }
  itemInCart.cartQuantity -= 1;
  if (!itemInCart.cartQuantity) {
    const indexOfProduct = cartCopy.findIndex(({ _id }) => _id === id);
    cartCopy.splice(indexOfProduct, 1);
  }
  dispatch(actions.decreaseProductQuantity(cartCopy));
};

/**
 *
 * @param {String} id - id of the product that needs to be deleted
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const deleteProductFromCart = (id) => async (dispatch, getState) => {
  const { cart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.deleteProductFromCart(id);
    const cartFromAPi = createCartFromResponse(response);
    return dispatch(actions.deleteProductFromCart(cartFromAPi));
  }

  const cartCopy = [...cart];
  const indexOfProduct = cartCopy.findIndex(({ _id }) => _id === id);
  if (indexOfProduct === -1) {
    throw new Error("There is no item with such id");
  }

  cartCopy.splice(indexOfProduct, 1);
  dispatch(actions.deleteProductFromCart(cartCopy));
};

/**
 *
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const deleteCart = () => async (dispatch, getState) => {
  const { authorization } = getState();
  if (authorization) {
    await cartRequests.deleteCart();
    return dispatch(actions.deleteCart());
  }
  dispatch(actions.deleteCart());
};

const operations = {
  getCart,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  deleteCart,
};

export default operations;
