import {footerLinksTypes} from "./index";

const {GOT_LINKS} = footerLinksTypes;

const getLinks = data => ({
    type: GOT_LINKS,
    payload: data
})

const actions = {
    getLinks
};

export default actions;