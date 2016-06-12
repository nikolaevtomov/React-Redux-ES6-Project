'use strict';

import { combineReducers }      from 'redux';
import { routerReducer }        from 'react-router-redux'
import app                      from './reducers/app';
import people                   from './reducers/people';
import planets                  from './reducers/planets';
import films                    from './reducers/films';
import species                  from './reducers/species';
import vehicles                 from './reducers/vehicles';
import starships                from './reducers/starships';
import ui                       from './reducers/ui';

const rootReducer = combineReducers({
  routing: routerReducer,
  app,
  people,
  planets,
  films,
  species,
  vehicles,
  starships,
  ui
});

export default rootReducer;
