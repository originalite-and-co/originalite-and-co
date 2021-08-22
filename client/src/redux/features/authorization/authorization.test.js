import authorizationReducer from './reducers';
import authorizationActions from './actions';


describe('authorization reducer', () => {
    const {loggOutCustomer, logInCustomer} = authorizationActions;
    const { authorization } = authorizationReducer;

    const initialState = false;

    test('authorizeCustomer', () => {
        const action = logInCustomer()

        expect(authorization(initialState,action)).toStrictEqual(true)
    })

    test('loggOutCustomer', () => {
        const action = loggOutCustomer()

        expect(authorization(initialState,action)).toStrictEqual(false)
    })

})