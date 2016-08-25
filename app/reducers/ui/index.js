'use strict';

import { combineReducers } from 'redux';
import app          from './app';
import visibility          from './visibility';

const uiReducer = combineReducers({
  app,
  visibility
});

export default uiReducer;
