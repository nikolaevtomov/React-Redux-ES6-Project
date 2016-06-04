'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware                      from 'redux-saga';
import ReduxPromise                              from 'redux-promise';
import ReduxThunk                                from 'redux-thunk';
import reducers                                  from './reducers';
import * as sagas                                from './sagas';

export const Stores = createStore(
  reducers,
  compose(
    applyMiddleware(
      ReduxPromise,
      ReduxThunk,
      createSagaMiddleware(...sagas)
    ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
