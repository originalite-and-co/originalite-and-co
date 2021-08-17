import types from "./types";

const {
    AUTHORIZATION_LOGGED_IN,
    AUTHORIZATION_LOGGED_OUT
} = types

const authorizeCustomer = (bool) => ({
    type: AUTHORIZATION_LOGGED_IN,
    payload: bool
})

const loggOutCustomer = (bool) => ({
    type: AUTHORIZATION_LOGGED_OUT,
    payload: bool
})

export default {
    authorizeCustomer,
    loggOutCustomer
}
