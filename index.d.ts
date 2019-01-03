import { Reducer } from 'redux';

export default function reduceReducer<S>(
  initialState: S,
  ...reducers: Array<Reducer<S>>
): Reducer<S>;
