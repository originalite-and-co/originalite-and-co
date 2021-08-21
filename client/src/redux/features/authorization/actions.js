import types from "./types";

const {AUTHORIZATION_LOGGED_IN} = types

const authorizeCustomer = (bool) => ({
    type: AUTHORIZATION_LOGGED_IN,
    payload: bool
})

export default {
    authorizeCustomer
}
