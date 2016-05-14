'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer                                  from './containers/';
import HomeContainer                                 from './containers/home-container';
import SampleContainer                               from './containers/sample-container';
import PageNotFound                                  from './containers/page-not-found';

export default () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ AppContainer }>

      <IndexRoute component={ HomeContainer } />
      <Route path="/sample" component={ SampleContainer } />
      <Route path="*" component={ PageNotFound } />

    </Route>
  </Router>
);
