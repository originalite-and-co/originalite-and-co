import types from './types'
import links from "../../../api/server/links";

const getLinksAction = data => ({
    type: types.GET_LINKS,
    payload: data
})

const getDataThunk = () => dispatch => {
    links.retrieveLinks()
        .then(data => dispatch(getLinksAction(data)))
}

const actions = {
    getDataThunk
};

export default actions;