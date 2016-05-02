'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import IndexContainer                                from './containers/';
import HomeContainer                                 from './containers/homeContainer';
import SampleContainer                               from './containers/sampleContainer';
import PageNotFound                                  from './containers/pageNotFound';

export default () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ IndexContainer }>

      <IndexRoute component={ HomeContainer } />
      <Route path="/sample" component={ SampleContainer } />
      <Route path="*" component={ PageNotFound } />

    </Route>
  </Router>
);
