import types from './types';

const {
  AUTHORIZATION_LOGGED_IN,
  AUTHORIZATION_LOGGED_OUT,
  AUTHORIZATION_NOT_AUTHORIZED
} = types;

const logInCustomer = () => ({
  type: AUTHORIZATION_LOGGED_IN,
  payload: true
});

const doNotAuthorize = () => ({
  type: AUTHORIZATION_NOT_AUTHORIZED,
  payload: false
});

const loggOutCustomer = () => ({
  type: AUTHORIZATION_LOGGED_OUT,
  payload: false
});

const actions = {
  logInCustomer,
  doNotAuthorize,
  loggOutCustomer
};

export default actions;
