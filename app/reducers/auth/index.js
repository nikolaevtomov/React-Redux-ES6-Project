'use strict';

import { combineReducers } from 'redux';
import authenticated       from './authenticated';

const authReducer = combineReducers({
  authenticated
});

export default authReducer;
