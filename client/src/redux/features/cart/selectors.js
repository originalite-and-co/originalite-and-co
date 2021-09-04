const getCart = (state) => state.cart;

const getCartQuantity = (state) => {
  return state.cart.reduce((sum, product) => {
    return sum + product.cartQuantity;
  }, 0);
};

const selectors = {
  getCart,
  getCartQuantity
};

export default selectors;
