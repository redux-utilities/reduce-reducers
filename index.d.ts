type Action = {
  type: string;
};

type Reducer<S> = (state: S | undefined, action: Action) => S;
type PreloadedReducer<S> = (state: S, action: Action) => S;

export default function reduceReducers<S>(
  initialState: S,
  ...reducers: PreloadedReducer<S>[]
): Reducer<S>;
export default function reduceReducers<S>(
  initialReducer: Reducer<S>,
  ...reducers: PreloadedReducer<S>[]
): Reducer<S>;
export default function reduceReducers<S>(
  initialState: S | null,
  ...reducers: PreloadedReducer<S>[]
): PreloadedReducer<S>;
export default function reduceReducers<S>(
  ...reducers: PreloadedReducer<S>[]
): PreloadedReducer<S>;
