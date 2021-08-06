import types from "./types";

const modalReducer = (state = [], action) => {
    const {type, payload} = action;
    const {OPENED_MODAL, CLOSED_MODAL} = types

    switch (type){
        case OPENED_MODAL:
            return [payload]
        case CLOSED_MODAL:
            return []
        default:
            return state
    }
}

export default {
    modal: modalReducer
}