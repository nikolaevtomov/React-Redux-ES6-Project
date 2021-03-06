'use strict';

import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import Routes       from './routes';
import { Stores }   from './stores';
import { appLoadingStarted } from './actions';

Stores.dispatch(appLoadingStarted());

render(
  <Provider store={ Stores }>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}
