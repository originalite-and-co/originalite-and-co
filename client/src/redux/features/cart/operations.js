import { cartRequests } from '../../../api/server';
import actions from './actions';
import utils from './utils';

const {
  createCartFromResponse,
  concatCartFromDbWithCurrentOne,
  updateApiCart
} = utils;

/**
 *
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const getCart = () => async (dispatch, getState) => {
  const { cart: currentCart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.retrieveCart();
    if (!response && !currentCart?.length) {
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
 * @param {String} id
 * @param {String} itemNo
 * @param {String} size
 * @param {Number} quantity
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const changeProductQuantity =
  (id, itemNo, size, quantity) => async (dispatch, getState) => {
    const { cart, authorization } = getState();

    if (quantity < 1) {
      throw new Error(`Invalid quantity: ${quantity}. it should be > 0`);
    }

    if (authorization) {
      const { products } = await cartRequests.retrieveCart();
      const indexOfProduct = products.findIndex(({ product, chosenSize }) => {
        return product._id === id && chosenSize === size;
      });

      if (indexOfProduct !== -1) {
        products.splice(indexOfProduct, 1);
      }

      const data = {
        products: [
          ...products,
          {
            product: id,
            cartQuantity: quantity,
            chosenSize: size
          }
        ]
      };

      const updatedCart = await cartRequests.updateCart(data);
      const cartFromAPi = createCartFromResponse(updatedCart);
      return dispatch(actions.updateCart(cartFromAPi));
    }

    const cartCopy = [...cart];
    const indexOfProduct = cartCopy.findIndex(({ _id, chosenSize }) => {
      return _id === id && chosenSize === size;
    });

    if (indexOfProduct !== -1) {
      cartCopy.splice(indexOfProduct, 1);
    }

    const data = [
      ...cartCopy,
      {
        _id: id,
        cartQuantity: quantity,
        chosenSize: size,
        itemNo
      }
    ];
    dispatch(actions.updateCart(data));
  };

/**
 *
 * @param {String} id - id of the product that needs to be added
 * @param {String} itemNo - itemNo property of the product
 * @param {String} size - size of the product that needs to be added
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const addProductToCart = (id, itemNo, size) => async (dispatch, getState) => {
  const { cart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.addProductToCart(id, size);
    const cartFromAPi = createCartFromResponse(response);
    return dispatch(actions.addProductToCart(cartFromAPi));
  }

  const cartCopy = [...cart];
  const itemInCart = cartCopy.find(({ _id, chosenSize }) => {
    return _id === id && chosenSize === size;
  });
  if (itemInCart) {
    itemInCart.cartQuantity += 1;
  } else {
    cartCopy.push({ cartQuantity: 1, _id: id, itemNo, chosenSize: size });
  }
  dispatch(actions.addProductToCart(cartCopy));
};

/**
 *
 * @param {String} id - id of the product which amount needs to be decreased
 * @param {String} size - size of the product which amount needs to be decreased
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const decreaseProductQuantity = (id, size) => async (dispatch, getState) => {
  const { cart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.decreaseProductQuantity(id, size);
    const cartFromAPi = createCartFromResponse(response);
    return dispatch(actions.decreaseProductQuantity(cartFromAPi));
  }

  const cartCopy = [...cart];
  const itemInCart = cartCopy.find(({ _id, chosenSize }) => {
    return _id === id && chosenSize === size;
  });
  if (!itemInCart) {
    throw new Error('There is no item with such id');
  }
  itemInCart.cartQuantity -= 1;
  if (!itemInCart.cartQuantity) {
    const indexOfProduct = cartCopy.findIndex(({ _id, chosenSize }) => {
      return _id === id && chosenSize === size;
    });
    cartCopy.splice(indexOfProduct, 1);
  }
  dispatch(actions.decreaseProductQuantity(cartCopy));
};

/**
 *
 * @param {String} id - id of the product that needs to be deleted
 *  @param {String} size - product with which size needs to be deleted
 * @returns {(function(Function, Function): Promise<*|undefined>)|*}
 */
const deleteProductFromCart = (id, size) => async (dispatch, getState) => {
  const { cart, authorization } = getState();
  if (authorization) {
    const response = await cartRequests.deleteProductFromCart(id, size);
    const cartFromAPi = createCartFromResponse(response);
    return dispatch(actions.deleteProductFromCart(cartFromAPi));
  }

  const cartCopy = [...cart];
  const indexOfProduct = cartCopy.findIndex(({ _id, chosenSize }) => {
    return _id === id && chosenSize === size;
  });
  if (indexOfProduct === -1) {
    throw new Error('There is no item with such id');
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
  changeProductQuantity,
  addProductToCart,
  decreaseProductQuantity,
  deleteProductFromCart,
  deleteCart
};

export default operations;
