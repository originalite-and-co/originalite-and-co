import types from './types'

const authorizationReducer = (state = false, action) => {
    const {type,payload} = action;
    const {AUTHORIZATION_LOGGED_IN} = types

    switch (type){
        case AUTHORIZATION_LOGGED_IN:
            return payload
        default:
            return state;
    }
}

export default {
    authorization: authorizationReducer
}
