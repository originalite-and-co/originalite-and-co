import types from './types';

const authorizationReducer = (state = false, action) => {
  const { type, payload } = action;
  const {
    AUTHORIZATION_LOGGED_IN,
    AUTHORIZATION_LOGGED_OUT,
    AUTHORIZATION_NOT_AUTHORIZED
  } = types;

  switch (type) {
    case AUTHORIZATION_LOGGED_IN:
      return payload;
    case AUTHORIZATION_LOGGED_OUT:
      return payload;
    case AUTHORIZATION_NOT_AUTHORIZED:
      return payload;
    default:
      return state;
  }
};

export default {
  authorization: authorizationReducer
};
