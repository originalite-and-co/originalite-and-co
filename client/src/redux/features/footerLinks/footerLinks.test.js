import reducers from './index';
import {actions} from "./index";

describe('testing getLinks reducer', () => {
    const {getLinksAction} = actions;
    const {footerLinks} = reducers;

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

    test('getDataAction', () => {
        const action = getLinksAction([{title: '', links: [{}, {}, {}, {}]}, {title: '', links: [{}, {}, {}]}, {title: '', links: [{}, {}, {}]}]);

        expect(footerLinks(initialState, action)).toStrictEqual([{title: '', links: [{}, {}, {}, {}]}, {title: '', links: [{}, {}, {}]}, {title: '', links: [{}, {}, {}]}]);
    })
})