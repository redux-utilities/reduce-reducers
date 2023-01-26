type Action = {
  type: string;
};

type Reducer<S, A extends Action> = (state: S, action: A) => S;

export default function reduceReducers<S, A extends Action>(
  initialState: S | null | undefined,
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;
export default function reduceReducers<S, A extends Action>(
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;
