import { Reducer } from 'redux';

export default function reduceReducers<S>(
  initialState: S | null,
  ...reducers: Reducer<S>[]
): Reducer<S>;
export default function reduceReducers<S>(
  ...reducers: Reducer<S>[]
): Reducer<S>;
