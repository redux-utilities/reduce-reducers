# Looking for Maintainers

**Unfortunately I ([timche](https://github.com/timche)) don't have the required time anymore to maintain this library and give it the necessary attention. Therefore I'm looking for maintainers that are willing to take care of this library on a long-term basis.**

Requirements:
- Having knowledge of this library and open-source in general.
- Keeping the philosophy and goals of this library.
- Taking care of issues and pull requests.
- If required and reasonable, working out next versions of this library with the intention to improve it with the community in mind and not for the sole purpose.
- Knowing what's good for the library and what not (e.g. not accepting every suggestion) in order to maintain the library scope.
- Having knowledge about the tooling (CI, build system, etc.) and the docs and maintaining them.

It's also possible to join [redux-utilities](https://github.com/redux-utilities), an umbrella organization of complementing redux utility libraries like this one, to take care of few or all libraries. Please let me know if you are interested in that. 

Please send me an email (adress on my profile) with the subject "reduce-reducers" and some information about you, if you want to be a maintainer.

# reduce-reducers

[![Build Status](https://travis-ci.org/redux-utilities/reduce-reducers.svg?branch=master)](https://travis-ci.org/redux-utilities/reduce-reducers)
[![npm Version](https://img.shields.io/npm/v/reduce-reducers.svg)](https://www.npmjs.com/package/reduce-reducers)
[![npm Downloads Monthly](https://img.shields.io/npm/dm/reduce-reducers.svg)](https://www.npmjs.com/package/reduce-reducers)

> Reduce multiple reducers into a single reducer from left to right

## Install

```
npm install reduce-reducers
```

## Usage

```js
import reduceReducers from 'reduce-reducers';

const initialState = { A: 0, B: 0 };

const addReducer = (state, payload) => ({ ...state, A: state.A + payload });
const multReducer = (state, payload) => ({ ...state, B: state.B * payload });

const reducer = reduceReducers(initialState, addReducer, multReducer);

const state = { A: 1, B: 2 };
const payload = 3;

reducer(state, payload); // { A: 4, B: 6 }
```

## FAQ

#### Why?

Originally created to combine multiple Redux reducers that correspond to different actions (e.g. [like this](https://github.com/acdlite/redux-fsa/blob/master/src/handleActions.js#L12)). Technically works with any reducer, not just with Redux, though I don't know of any other use cases.

#### What is the difference between `reduceReducers` and `combineReducers`?

This StackOverflow post explains it very well: https://stackoverflow.com/a/44371190/5741172
