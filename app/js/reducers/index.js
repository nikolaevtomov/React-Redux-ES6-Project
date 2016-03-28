'use strict';

import { combineReducers } from 'redux';
import sampleShowHide      from './sample_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  sampleShowHide
});

export default rootReducer;
