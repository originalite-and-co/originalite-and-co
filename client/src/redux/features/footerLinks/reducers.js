import {types} from "./index";

const initialState = [];

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.GET_LINKS:
            return payload
        default:
            return state
    }
}

const reducers = {
    footer: reducer,
};

export default reducers