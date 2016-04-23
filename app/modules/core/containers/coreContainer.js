'use strict';

import React, { Component } from 'react';

import Header               from '../components/header';
import Footer               from '../components/footer';

class CoreContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
          { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default CoreContainer;
