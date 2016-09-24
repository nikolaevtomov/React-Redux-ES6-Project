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
import auth                       from './reducers/auth';
import user                       from './reducers/user';
import ui                         from './reducers/ui';

const rootReducer = combineReducers({
  people,
  planets,
  films,
  species,
  vehicles,
  starships,
  auth,
  user,
  ui,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
