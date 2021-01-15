type Action = {
  type: string;
};

type Reducer<S, A> = (state: S, action: A) => S;

export default function reduceReducers<S, A = Action>(
  initialState: S | null,
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;

export default function reduceReducers<S, A = Action>(
  ...reducers: Reducer<S, A>[]
): Reducer<S, A>;
