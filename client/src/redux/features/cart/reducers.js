import types from './types';

const {
  GOT_CART,
  ADDED_PRODUCT_TO_CART,
  DECREASED_PRODUCT_QUANTITY,
  DELETED_PRODUCT_FROM_CART,
  DELETED_CART,
} = types;

const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GOT_CART: {
      return payload;
    }
    case ADDED_PRODUCT_TO_CART: {
      return payload;
    }
    case DECREASED_PRODUCT_QUANTITY: {
      return payload;
    }
    case DELETED_PRODUCT_FROM_CART: {
      return payload;
    }
    case DELETED_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
};

const reducers = {
  cart: reducer,
};

export default reducers;
