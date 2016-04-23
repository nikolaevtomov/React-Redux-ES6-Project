'use strict';

import React     from 'react';
import TestUtils from 'react-addons-test-utils';

import Footer    from './footer';

describe('Component: Footer', function() {

  it('should render properly', function() {
    const footer = TestUtils.renderIntoDocument(
      <Footer />
    );

    TestUtils.findRenderedDOMComponentWithTag.bind(null, footer, 'footer').should.not.throw();
  });

});
