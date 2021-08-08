import getDataReducer from './reducer';
import {getDataAction} from "./actions";

describe('testing getData reducer', () => {
    const initialState = [];

    test('getDataAction', () => {
        const action = getDataAction([{}, {}, {}, {}, {}]);
        expect(getDataReducer(initialState, action)).toStrictEqual([{}, {}, {}, {}, {}]);
    })
})
