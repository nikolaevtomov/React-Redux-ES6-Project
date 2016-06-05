'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware                      from 'redux-saga';
import ReduxPromise                              from 'redux-promise';
import ReduxThunk                                from 'redux-thunk';
import Sagas                                     from './sagas';
import Reducers                                  from './reducers';

const SagaMiddleware = createSagaMiddleware();

export const Stores = createStore(
  Reducers,
  compose(
    applyMiddleware(
      ReduxPromise,
      ReduxThunk,
      SagaMiddleware
    ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

SagaMiddleware.run(Sagas);
