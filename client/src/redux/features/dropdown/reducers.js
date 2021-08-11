import types from "./types";

const reducer = (state = false, action) => {
    const {type} = action;
    const {OPENED_DROPDOWN, CLOSED_DROPDOWN} = types

    switch (type){
        case OPENED_DROPDOWN:
            return true
        case CLOSED_DROPDOWN:
            return false
        default:
            return state
    }
}

const reducers = {
    isAnyDropdownOpen: reducer
}

export default reducers;