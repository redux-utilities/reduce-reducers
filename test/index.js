import test from 'ava';
import reduceReducers from '../src';

test('combines multiple reducers into a single reducer', t => {
  const reducer = reduceReducers(
    (prev, curr) => ({ ...prev, A: prev.A + curr }),
    (prev, curr) => ({ ...prev, B: prev.B * curr })
  );

  t.deepEqual(reducer({ A: 1, B: 2 }, 3), { A: 4, B: 6 });
  t.deepEqual(reducer({ A: 5, B: 8 }, 13), { A: 18, B: 104 });
});

test('chains multiple reducers into a single reducer', t => {
  const addReducer = (prev, curr) => ({ ...prev, A: prev.A + curr });
  const multReducer = (prev, curr) => ({ ...prev, A: prev.A * curr });
  const reducerAddMult = reduceReducers(addReducer, multReducer);
  const reducerMultAdd = reduceReducers(multReducer, addReducer);

  t.deepEqual(reducerAddMult({ A: 1, B: 2 }, 3), { A: 12, B: 2 });
  t.deepEqual(reducerMultAdd({ A: 1, B: 2 }, 3), { A: 6, B: 2 });
});
