'use strict';

import { combineReducers }        from 'redux';
import { routerReducer }          from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import people                     from './reducers/people';
import planets                    from './reducers/planets';
import films                      from './reducers/films';
import species                    from './reducers/species';
import vehicles                   from './reducers/vehicles';
import starships                  from './reducers/starships';
import ui                         from './reducers/ui';

const rootReducer = combineReducers({
  routing: routerReducer,
  people,
  planets,
  films,
  species,
  vehicles,
  starships,
  ui,
  form: formReducer
});

export default rootReducer;
