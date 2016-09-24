'use strict';

import { combineReducers } from 'redux';
import info                from './info';

const userReducer = combineReducers({
  info,
});

export default userReducer;
