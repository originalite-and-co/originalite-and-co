import reducers from './index';
import {footerLinksActions} from "./index";

describe('testing getLinks reducer', () => {
    const {getLinks} = footerLinksActions;
    const {footerLinks} = reducers;

    const initialState = [
        {
            title: '',
            links: [{}, {}, {}, {}]
        }
    ];

    test('getDataAction', () => {
        const action = getLinks([{title: '', links: [{}, {}, {}]}]);

        expect(footerLinks(initialState, action)).toStrictEqual([{title: '', links: [{}, {}, {}]}]);
    })
})