'use strict';

import { combineReducers }      from 'redux';
import { routerReducer }        from 'react-router-redux'
import app                      from './reducers/app';
import ui                       from './reducers/ui';
import posts                    from './reducers/posts';

const rootReducer = combineReducers({
  app,
  posts,
  ui,
  routing: routerReducer
});

export default rootReducer;
