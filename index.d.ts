type Action<T = any> = {
  type: T;
};

type Reducer<S, A extends Action> = (state: S, action: A) => S;

export default function reduceReducers<S, A extends Action>(
  initialState?: S,
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;

export default function reduceReducers<S, A extends Action>(
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;
