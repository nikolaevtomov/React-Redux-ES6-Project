'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore }                      from 'react-router-redux'
import AppContainer                                  from './containers/app-container';
import HomeContainer                                 from './containers/home-container';
import SampleContainer                               from './containers/sample-container';
import PageNotFound                                  from './containers/page-not-found';
import { Stores }                                    from './stores';

const history = syncHistoryWithStore(browserHistory, Stores);

export default () => (
  <Router history={ history }>
    <Route path="/" component={ AppContainer }>

      <IndexRoute component={ HomeContainer } />
      <Route path="/sample" component={ SampleContainer } />
      <Route path="*" component={ PageNotFound } />

    </Route>
  </Router>
);
