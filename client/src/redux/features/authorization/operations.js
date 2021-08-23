import actions from './actions';

const { logInCustomer, loggOutCustomer, doNotAuthorize } = actions;

const authorizeUser = () => (dispatch) => {
  const isAuthorized =
    sessionStorage.getItem('token') || localStorage.getItem('token');
  if (isAuthorized) {
    dispatch(logInCustomer());
  } else {
    dispatch(doNotAuthorize());
  }
};
const loggOutUser = () => (dispatch) => {
  sessionStorage.removeItem('token');
  localStorage.removeItem('token');
  dispatch(loggOutCustomer());
};

export default {
  authorizeUser,
  loggOutUser
};
