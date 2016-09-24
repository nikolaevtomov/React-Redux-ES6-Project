'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware }                      from 'react-router-redux';
import { browserHistory }                        from 'react-router';
import createSagaMiddleware                      from 'redux-saga';
import ReduxThunk                                from 'redux-thunk';
import Sagas                                     from './sagas';
import Reducers                                  from './reducers';

const SagaMiddleware = createSagaMiddleware();

export const Stores = createStore(
  Reducers,
  compose(
    applyMiddleware(
      // ReduxThunk,
      SagaMiddleware,
      routerMiddleware(browserHistory),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

SagaMiddleware.run(Sagas);
