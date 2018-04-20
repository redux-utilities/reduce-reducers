import reduceReducers from '../src';

test('combines multiple reducers into a single reducer', () => {
  const reducer = reduceReducers(
    (prev, curr) => ({ ...prev, A: prev.A + curr }),
    (prev, curr) => ({ ...prev, B: prev.B * curr })
  );

  expect(reducer({ A: 1, B: 2 }, 3)).toEqual({ A: 4, B: 6 });
  expect(reducer({ A: 5, B: 8 }, 13)).toEqual({ A: 18, B: 104 });
});

test('chains multiple reducers into a single reducer', () => {
  const addReducer = (prev, curr) => ({ ...prev, A: prev.A + curr });
  const multReducer = (prev, curr) => ({ ...prev, A: prev.A * curr });
  const reducerAddMult = reduceReducers(addReducer, multReducer);
  const reducerMultAdd = reduceReducers(multReducer, addReducer);

  expect(reducerAddMult({ A: 1, B: 2 }, 3)).toEqual({ A: 12, B: 2 });
  expect(reducerMultAdd({ A: 1, B: 2 }, 3)).toEqual({ A: 6, B: 2 });
});

test('supports additional arguments', () => {
  const addReducer = (prev, curr, scale) => ({
    ...prev,
    A: (prev.A + curr) * scale
  });
  const multReducer = (prev, curr, scale) => ({
    ...prev,
    A: prev.A * curr * scale
  });
  const reducerAddMult = reduceReducers(addReducer, multReducer);

  expect(reducerAddMult({ A: 1, B: 2 }, 3, 2)).toEqual({ A: 48, B: 2 });
});
