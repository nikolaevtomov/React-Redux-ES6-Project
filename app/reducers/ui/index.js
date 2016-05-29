'use strict';

import { combineReducers } from 'redux';
import visibility          from './visibility';

const uiReducer = combineReducers({
  visibility
});

export default uiReducer;
