import {types} from "./index";

const initialState = [
    {
        title: '',
        links: [{}, {}, {}, {}]
    },
    {
        title: '',
        links: [{}, {}, {}]
    },
    {
        title: '',
        links: [{}, {}, {}]
    }
];

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
    footerLinks: reducer,
};

export default reducers