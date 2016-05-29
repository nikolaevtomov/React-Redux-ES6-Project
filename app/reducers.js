'use strict';

import { combineReducers }      from 'redux';
import { routerReducer }        from 'react-router-redux'
import app                      from './reducers/app';
import ui                       from './reducers/ui';

const rootReducer = combineReducers({
  app,
  ui,
  routing: routerReducer
});

export default rootReducer;
