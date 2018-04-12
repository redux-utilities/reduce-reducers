# reduce-reducers

[![build status](https://img.shields.io/travis/acdlite/reduce-reducers/master.svg?style=flat-square)](https://travis-ci.org/acdlite/reduce-reducers)
[![npm version](https://img.shields.io/npm/v/reduce-reducers.svg?style=flat-square)](https://www.npmjs.com/package/reduce-reducers)

Reduce multiple reducers into a single reducer from left to right.

```
npm install --save reduce-reducers
```

## Example

```js
const reducer = reduceReducers(
  (prev, curr) => ({...prev, A: prev.A + curr}),
  (prev, curr) => ({...prev, B: prev.B * curr}),
);

expect(reducer({ A: 1, B: 2 }, 3)).to.deep.equal({ A: 4, B: 6 });
expect(reducer({ A: 5, B: 8 }, 13)).to.deep.equal({ A: 18, B: 104 });
```

## Why?

Originally created to combine multiple Redux reducers that correspond to different actions (e.g. [like this](https://github.com/acdlite/redux-fsa/blob/master/src/handleActions.js#L12)). Technically works with any reducer, not just with Redux, though I don't know of any other use cases.
