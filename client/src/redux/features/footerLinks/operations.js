import { linkRequests } from '../../../api/server/index.js';
import footerLinksActions from './actions';

const { getLinks } = footerLinksActions;

const getData = () => (dispatch) => {
  linkRequests.retrieveLinks().then((data) => dispatch(getLinks(data)));
};

const operations = {
  getData,
};

export default operations;
