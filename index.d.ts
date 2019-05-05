type Action = {
  type: string;
};

type Reducer<S> = (state: S, action: Action) => S;

function reduceReducers<S>(initialState: S | null, ...reducers: Reducer<S>[]): Reducer<S>;
function reduceReducers<S>(...reducers: Reducer<S>[]): Reducer<S>;

export default reduceReducers;
