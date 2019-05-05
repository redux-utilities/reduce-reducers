type Action = {
  type: string;
};

type Reducer<S> = (state: S, action: Action) => S;

export default function reduceReducers<S>(
  initialState: S | null,
  ...reducers: Reducer<S>[]
): Reducer<S>;
export default function reduceReducers<S>(
  ...reducers: Reducer<S>[]
): Reducer<S>;
