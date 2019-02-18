type Action = {
  type: string;
};

type Reducer<S> = (state: S, action: Action) => S;

export default function reduceReducer<S>(
  initialState: S,
  ...reducers: Array<Reducer<S>>
): Reducer<S>;
