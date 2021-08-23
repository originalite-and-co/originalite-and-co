import reducer from './reducers';

const { cart: cartReducer } = reducer;

/**
 * action {
 *     type: "@@INIT"
 * } is an action that redux use to initialize the store
 * */
describe('cart reducer', () => {
  const initAction = {
    type: '@@INIT'
  };
  test('if it returns initial value ', () => {
    const result = cartReducer(undefined, initAction);
    //the initial value is spotted in cartReducer function
    expect(result).toStrictEqual([]);
  });

  test('if it returns state when action type is not declared', () => {
    const state = 'test';
    const result = cartReducer(state, initAction);

    expect(result).toMatch(state);
  });
});
