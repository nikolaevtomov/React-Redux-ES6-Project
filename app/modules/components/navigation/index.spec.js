'use strict';

import React     from 'react';
import TestUtils from 'react-addons-test-utils';

import Navigation    from './index';

describe('Component: Navigation', function() {

  it('should render properly', function() {
    const Navigation = TestUtils.renderIntoDocument(
      <Navigation />
    );

    TestUtils.findRenderedDOMComponentWithTag.bind(null, navigation, 'Navigation').should.not.throw();
  });

});
