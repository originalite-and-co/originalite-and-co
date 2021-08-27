const reducer = (state = [], action) => {
  const { type, payload } = action;

  if (type === '') {
    return state;
  } else {
    return state;
  }
};

const reducers = {
  cart: reducer,
};

export default reducers;
