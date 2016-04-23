'use strict';

import React     from 'react';
import TestUtils from 'react-addons-test-utils';

import App       from './app';

describe('App', () => {

  it('should render properly', function() {
    const App = TestUtils.renderIntoDocument(
      <App />
    );

    TestUtils.findRenderedDOMComponentWithTag.bind(null, app, 'app').should.not.throw();
  });


});
