'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App                                           from './app';
import HomePage                                      from './modules/pages/HomePage';
import SamplePage                                    from './modules/pages/SamplePage';
import NotFoundPage                                  from './modules/pages/NotFoundPage';

export default () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>

      <IndexRoute component={ HomePage } />
      <Route path="/sample" component={ SamplePage } />
      <Route path="*" component={ NotFoundPage } />

    </Route>
  </Router>
);
