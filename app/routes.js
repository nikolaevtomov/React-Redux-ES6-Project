'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import CoreContainer                                 from './modules/core/containers/coreContainer';
import IndexContainer                                from './modules/index/containers/indexContainer';
import SampleContainer                               from './modules/sample/containers/sampleContainer';
import PageNotFound                                  from './modules/core/containers/pageNotFound';

export default () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ CoreContainer }>

      <IndexRoute component={ IndexContainer } />
      <Route path="/sample" component={ SampleContainer } />
      <Route path="*" component={ PageNotFound } />

    </Route>
  </Router>
);
