import links from "../../../api/server/links";
import {footerLinksActions} from "./index";

const {getLinks} = footerLinksActions

const getData = () => dispatch => {
    links.retrieveLinks()
        .then(data => dispatch(getLinks(data)))
}

const operations = {
    getData
};

export default operations;