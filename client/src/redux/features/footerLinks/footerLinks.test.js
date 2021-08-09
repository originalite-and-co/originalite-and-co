import reducers from './reducers';
import footerLinksActions from "./actions";

describe('testing getLinks reducer', () => {
    const {getLinks} = footerLinksActions;
    const {footerLinks} = reducers;

    const initialState = [
        {
            title: '',
            links: [{}, {}, {}, {}]
        }
    ];

    const linkData = [{title: '', links: [{}, {}, {}]}]

    test('getDataAction', () => {
        const action = getLinks(linkData);

        expect(footerLinks(initialState, action)).toStrictEqual(linkData);
    })
})