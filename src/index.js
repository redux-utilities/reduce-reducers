export default (...args) => {
  const initialState =
    typeof args[args.length - 1] !== 'function' && args.pop();
  const reducers = args;

  if (typeof initialState === 'undefined') {
    throw new TypeError(
      'The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.'
    );
  }

  return (prevState, value, ...args) =>
    typeof prevState === 'undefined'
      ? initialState
      : reducers.reduce(
          (newState, reducer) => reducer(newState, value, ...args),
          prevState
        );
};
