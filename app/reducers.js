'use strict';

import { combineReducers } from 'redux';
import app                 from './reducers';
import visibility          from './reducers/sample_reducer';

const rootReducer = combineReducers({
  app,
  visibility,
});

export default rootReducer;
