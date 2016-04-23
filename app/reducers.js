'use strict';

import { combineReducers } from 'redux';
import sampleShowHide      from './modules/core/reducers/core_reducer';

const rootReducer = combineReducers({
  sampleShowHide
});

export default rootReducer;
