'use strict';

import React            from 'react';
import TestUtils        from 'react-addons-test-utils';
import Header           from './index';

function testRenderer() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Header />);
  const output = renderer.getRenderOutput();

  return {
    output,
    renderer,
  };
}

describe('Component: Header', () => {

  it('should render properly', () => {

    const { output } = testRenderer();
    expect(output.type).to.equal('header');

  });

});
