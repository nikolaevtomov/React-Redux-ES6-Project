'use strict';

import React            from 'react';
import TestUtils        from 'react-addons-test-utils';
import Footer           from './footer';

function testRenderer() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Footer />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer,
  };
}

describe('Component: Footer', () => {

  it('should render properly', () => {

    const { output } = testRenderer();
    expect(output.type).to.equal('footer');

  });

});
