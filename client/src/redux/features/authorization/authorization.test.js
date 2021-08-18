import authorizationReducer from './reducers';
import authorizationActions from './actions';


describe('authorization reducer', () => {
    const {authorizeCustomer, loggOutCustomer} = authorizationActions;
    const { authorization } = authorizationReducer;

    const initialState = false;

    test('authorizeCustomer', () => {
        const action = authorizeCustomer(true)

        expect(authorization(initialState,action)).toStrictEqual(true)
    })

    test('loggOutCustomer', () => {
        const action = authorizeCustomer(false)

        expect(authorization(initialState,action)).toStrictEqual(false)
    })

})